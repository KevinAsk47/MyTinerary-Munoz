import { useEffect, useState } from "react";
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = (props) => {

    const [verContraseña, setVerContraseña] = useState(true)
    const [errores, setErrores] = useState([])
    const password = () => {
        setVerContraseña(!verContraseña)
    }

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

    const tostada = (respuesta,condition) => {
        if (condition === "error") {
            toast.error(respuesta, {
                position: "top-right",
            })
        }else{
            props.exitoso() 
            props.history.push('/')
        }   
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
            if (Object.values(usuarioGrabado).some(valor => valor === "")) {
                return tostada('Complete all fields please',"error")
            } else {
                var respuesta = await props.nuevoUsuario(usuarioGrabado)
                if (respuesta) {
                    respuesta.details ? setErrores(respuesta.details) : tostada(respuesta,"error")
                } else {
                    tostada()
                }
            }
        } else {
            let usuario = e ? usuarioLogueado : googleUser
            console.log(usuario)
            if (usuario.contraseña === "" || usuario.mail === "") {
                tostada("Complete all fields please","error")
            } else {
                var respuesta = await props.loguearUsuario(usuario)
                respuesta ? tostada(respuesta,"error") : tostada()
            }
        }
    }

    const responseGoogle = (response) => {
        if (response.profileObj.email) {
            const { givenName, email, googleId, imageUrl, familyName } = response.profileObj
            if (props.form) {
                enviarDatos(null, { nombre: givenName, apellido: familyName, usuario: "us"+1, mail: email, contraseña: googleId, imagen: imageUrl, pais: "ninguno", ingresoGoogle: true })
            } else {
                enviarDatos(null, { mail: email, contraseña: googleId, ingresoGoogle: true })
            }
        } else {
            alert("Oops, something went wrong")
        }
    }

    const info = {
        nombre: {imagen: '/img/letra-f.png', nombre: 'First Name', tipo: 'text'},
        apellido: {imagen: '/img/l.png', nombre: 'Last Name', tipo: 'text'},
        usuario: {imagen: '/img/user.svg', nombre: 'Usuario', tipo: 'text'},
        mail: {imagen: '/img/arroba.png', nombre: 'Email', tipo: 'email'},
        contraseña: {imagen: '/img/bloquear.png', nombre: 'Password', tipo: (verContraseña ? "password" : "text")},
        imagen: {imagen: '/img/paises.png', nombre: 'URL', tipo: 'text'}
    }

    return (
        <div className="formularios">
            <div className={props.form ? 'formulario' : 'formularioChico'}>
                <form className="formUser">
                    {
                        props.form ? props.signup.map((campo, index) => {
                            let imagenIlustrativa = info[campo].imagen
                            let tipo = info[campo].tipo
                            let nombreDeCampo = info[campo].nombre
                            return (<div key={index} className="col-auto inp">
                                <label className="visually-hidden">{campo}</label>
                                <div className="input-group">
                                    <div className="input-group-text"> <img onClick={password} style={{ width: '20px' }}
                                        src={imagenIlustrativa} alt="" /> </div>
                                    <input type={tipo} className="form-control" placeholder={nombreDeCampo}
                                        onChange={leerInput}
                                        value={nuevoUsuario[campo]} name={campo}
                                    />
                                </div>
                            </div>)
                        })
                            :
                            props.login.map((campo,index) => {
                                let imagenIlustrativa = campo === 'mail' ? "/img/arroba.png" : "/img/bloquear.png"
                                let tipo = campo === 'mail' ? "email" : (verContraseña ? "password" : "text")
                                let nombreDeCampo = campo === 'mail' ? "Email" : 'Password'
                                return (<div key={index} className="col-auto inp">
                                    <label className="visually-hidden">{campo}</label>
                                    <div className="input-group">
                                        <div className="input-group-text"> <img onClick={password} style={{ width: '20px' }} src={imagenIlustrativa} alt="" /> </div>
                                        <input type={tipo} className="form-control" placeholder={nombreDeCampo}
                                            onChange={leerInput}
                                            value={campo === 'mail' ? usuarioLogueado.mail : usuarioLogueado.contraseña} name={campo}
                                        />
                                    </div>
                                </div>)
                            })
                    }
                    {
                        props.form && <select className="form-select col-12" aria-label="Default select example" name="pais" onChange={leerInput} value={nuevoUsuario.pais} >
                            <option>Open this select menu</option>
                            {
                                props.listaPaises.map((pais) => <option key={pais.name} value={pais.name} >{pais.name}</option>)
                            }
                        </select>
                    }
                    <div className="btnSubmit">
                        <button className={props.form ? 'submit' : 'submitChico'} type="submit" onClick={enviarDatos}>{props.form ? 'Sign Up' : 'Log In'}</button>
                    </div>
                    <p style={{ color: 'white' }}>---- or ----</p>
                    <GoogleLogin
                        style={{ textAlign: 'center' }}
                        clientId="602074754508-mbqa6smsa8d1oail4ko7pm7nqe3gbm72.apps.googleusercontent.com"
                        buttonText={props.form ? "Sign up with google" : "Log in with google"}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    {
                        props.form ? <span className="errores">
                            {
                                errores.map(error => <p>*{error.message}</p>)
                            }
                        </span>
                            : <div className="SignUpForFree">
                                <p>Don't have a MyTynerary account yet?</p>
                                <p>Sign up for free <Link to="/SignUp">here!</Link></p>
                            </div>
                    }
                </form>
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
            </div>
            {props.children}
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
    exitoso: usersActions.exitoso
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)