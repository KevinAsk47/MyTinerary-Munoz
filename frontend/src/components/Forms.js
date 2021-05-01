import { useEffect, useState } from "react"
import usersActions from '../redux/actions/usersActions'
import { connect } from 'react-redux'
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
        let usuarioGrabado = e ? nuevoUsuario : googleUser
        if (props.form) {
            var respuesta = await props.nuevoUsuario(usuarioGrabado)
            if (respuesta) {
                if (respuesta.details) {
                    setErrores(respuesta.details)
                } else {
                    toast.info(respuesta, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        } else {
            let usuario = e ? usuarioLogueado : googleUser
            var respuesta = await props.loguearUsuario(usuario)
            if (respuesta) {
                return alert('no pibe')
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
            alert("Algo salió mal, volvé más tarde...")
        }
    }

    return (
        <div className="formularios">
            {
                props.form &&
                <div className="formSignUp">
                    <span style={{ color: 'white' }}>
                        {
                            errores.map(error => <p>{error.message}</p>)
                        }
                    </span>
                </div>
            }
            <div className={props.form ? 'formulario' : 'formularioChico'}>
                <form className="formUser">
                    {
                        props.form &&
                        <>
                            <div>
                                <input className="inp" type="text" placeholder="First Name" onChange={leerInput} value={nuevoUsuario.nombre} name="nombre" />
                                <input className="inp" type="text" placeholder="Last Name" onChange={leerInput} value={nuevoUsuario.apellido} name="apellido" />
                            </div>
                            <input className="inp" type="text" placeholder="Username" onChange={leerInput} value={nuevoUsuario.usuario} name="usuario" />
                        </>
                    }
                    <div className="col-auto inp">
                        <label className="visually-hidden" for="autoSizingInputGroup">E-mail</label>
                        <div className="input-group">
                            <div className="input-group-text"> <img style={{ width: '20px' }} src="/img/user.svg" alt="" /> </div>
                            <input type="email" className="form-control" id="autoSizingInputGroup" placeholder="E-mail"
                                onChange={leerInput} value={props.form ? nuevoUsuario.mail : usuarioLogueado.mail} name="mail" />
                        </div>
                    </div>
                    <div class="col-auto inp">
                        <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
                        <div className="input-group">
                            <div className="input-group-text"> <img onClick={password} style={{ width: '20px' }} src="/img/bloquear.png" alt="" /> </div>
                            <input type={verContraseña ? "password" : "text"} className="form-control" id="autoSizingInputGroup" placeholder="Password"
                                onChange={leerInput} value={props.form ? nuevoUsuario.contraseña : usuarioLogueado.contraseña} name="contraseña" />
                        </div>
                    </div>
                    {
                        props.form &&
                        <>
                            <input className="inp" type="url" placeholder="Image" onChange={leerInput} value={nuevoUsuario.imagen} name="imagen" />
                            <select className="inp" name="pais" onChange={leerInput} value={nuevoUsuario.pais} >
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
                    <p style={{ color: 'white' }}>or</p>
                    <GoogleLogin
                        clientId="602074754508-mbqa6smsa8d1oail4ko7pm7nqe3gbm72.apps.googleusercontent.com"
                        buttonText="Ndeaaa"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <ToastContainer />
                </form>
            </div>
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
    loguearUsuario: usersActions.loguearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)