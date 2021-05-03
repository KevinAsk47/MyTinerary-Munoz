import { useEffect, useState } from "react";
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = (props) => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        mail: '',
        contraseña: '',
        imagen: '',
        ingresoGoogle: false
    })

    const [usuarioLogueado, setUsuarioLogueado] = useState({
        mail: '',
        contraseña: '',
        ingresoGoogle: false
    })

    const [verContraseña, setVerContraseña] = useState(true)
    const [errores, setErrores] = useState([])

    const tostada = (respuesta) => {
        toast.error(respuesta, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const redireccion = (mensaje) => {
        toast.success(mensaje, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
                props.history.push('/Cities')
            }
        })
    }

    const password = () => {
        setVerContraseña(!verContraseña)
    }

    useEffect(() => {
        props.cargarPaises()
    }, [])

    const leerInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (props.form) {
            setNuevoUsuario({
                ...nuevoUsuario,
                [name]: value
            })
        } else {
            setUsuarioLogueado({
                ...usuarioLogueado,
                [name]: value
            })
        }
    }

    const enviarDatos = async (e = null, googleUser = null) => {
        e && e.preventDefault()
        if (props.form) {
            let usuarioGrabado = e ? nuevoUsuario : googleUser
            if (usuarioGrabado.nombre === "" || usuarioGrabado.apellido === "" || usuarioGrabado.usuario === "" || usuarioGrabado.mail === "" || usuarioGrabado.contraseña === "" || usuarioGrabado.imagen === "") {
                return tostada('Complete all fields please')
            } else {
                var respuesta = await props.nuevoUsuario(usuarioGrabado)
                if (respuesta) {
                    respuesta.details ? setErrores(respuesta.details) : tostada(respuesta) 
                } else {
                    redireccion("Thanks for signing up!")
                }
            }
        } else {
            let usuario = e ? usuarioLogueado : googleUser
            if (usuario.contraseña === "" || usuario.mail === "") {
                tostada('Complete all fields please')
            }else{
                var respuesta = await props.loguearUsuario(usuario)
                respuesta ? tostada(respuesta) : redireccion("Successful login!")
            }   
        }
    }

    const responseGoogle = (response) => {
        if (response.profileObj.email) {
            const { givenName, email, googleId, imageUrl, familyName } = response.profileObj
            if (props.form) {
                enviarDatos(null, { nombre: givenName, apellido: familyName, usuario: givenName, mail: email, contraseña: googleId, imagen: imageUrl, pais: "ninguno", ingresoGoogle: true })
            } else {
                enviarDatos(null, { mail: email, contraseña: googleId, ingresoGoogle: false })
            }
        } else {
            alert("Oops, something went wrong")
        }
    }

    return (
        <div className="formularios">
            <div className={props.form ? 'formulario' : 'formularioChico'}>
                <form className="formUser" >
                    {
                        props.form &&
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div className="col-6 inp">
                                    <label className="visually-hidden">First Name</label>
                                    <div className="input-group">
                                        <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/letra-f.png" alt="" /> </div>
                                        <input type="text" className="form-control" placeholder="First Name"
                                            onChange={leerInput} value={nuevoUsuario.nombre} name="nombre" required />
                                    </div>
                                </div>
                                <div className="col-6 inp">
                                    <label className="visually-hidden">Last Name</label>
                                    <div className="input-group">
                                        <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/l.png" alt="" /> </div>
                                        <input type="text" className="form-control" placeholder="Last Name"
                                            onChange={leerInput} value={nuevoUsuario.apellido} name="apellido" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto inp">
                                <label className="visually-hidden">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/user.svg" alt="" /> </div>
                                    <input type="text" className="form-control" placeholder="Username"
                                        onChange={leerInput} value={nuevoUsuario.usuario} name="usuario" required />
                                </div>
                            </div>
                        </>
                    }
                    <div className="col-auto inp">
                        <label className="visually-hidden">E-mail</label>
                        <div className="input-group">
                            <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/arroba.png" alt="" /> </div>
                            <input type="email" className="form-control" placeholder="E-mail"
                                onChange={leerInput} value={props.form ? nuevoUsuario.mail : usuarioLogueado.mail} name="mail" required />
                        </div>
                    </div>
                    <div className="col-auto inp">
                        <label className="visually-hidden">Password</label>
                        <div className="input-group">
                            <div className="input-group-text"> <img onClick={password} style={{ width: '20px' }} src="/img/bloquear.png" alt="" /> </div>
                            <input type={verContraseña ? "password" : "text"} className="form-control" placeholder="Password"
                                onChange={leerInput} value={props.form ? nuevoUsuario.contraseña : usuarioLogueado.contraseña} name="contraseña" required />
                        </div>
                    </div>
                    {
                        props.form &&
                        <>
                            <div className="col-auto inp">
                                <label className="visually-hidden">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/paises.png" alt="" /> </div>
                                    <input type="text" className="form-control" placeholder="URL"
                                        onChange={leerInput} value={nuevoUsuario.imagen} name="imagen" required />
                                </div>
                            </div>
                            <select className="form-select col-12" aria-label="Default select example" name="pais" onChange={leerInput} value={nuevoUsuario.pais} >
                                <option>Open this select menu</option>
                                {
                                    props.listaPaises.map((pais) => <option key={pais.name} value={pais.name} >{pais.name}</option>)
                                }
                            </select>
                        </>
                    }
                    <div className="btnSubmit">
                        <button className={props.form ? 'submit' : 'submitChico'} type="submit" onClick={enviarDatos}>{props.form ? 'Sign Up' : 'Log In'}</button>
                    </div>
                    <p style={{ color: 'white' }}>---- or ----</p>
                    <GoogleLogin
                        clientId="602074754508-mbqa6smsa8d1oail4ko7pm7nqe3gbm72.apps.googleusercontent.com"
                        buttonText="Ndeaaa"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    {
                        !props.form &&
                        <div className="SignUpForFree">
                        <p>Don't have a MyTynerary account yet?</p>
                        <p>Sign up for free <Link to="/SignUp">here!</Link></p>
                        </div>
                    }
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <ToastContainer />
                </form>
            </div>
            {
                props.form &&
                <div className="formSignUp">
                    <img style={{width: '15vw'}} src="/img/logoDos.png" alt=""/>
                    <h2>Sign up for free!</h2>
                    <p>Are you already registered?</p>
                    <p>Click <Link to="/LogIn">Here</Link> </p>
                    <span style={{ color: 'red', textAlign: 'center' }}>
                        {
                            errores.map(error => <p>*{error.message}</p>)
                        }
                    </span>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listaPaises: state.users.paises,
        usuario: state.users.users
    }
}

const mapDispatchToProps = {
    cargarPaises: usersActions.fetchPaises,
    nuevoUsuario: usersActions.nuevoUsuario,
    loguearUsuario: usersActions.loguearUsuario,
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)