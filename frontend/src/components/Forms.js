import { useEffect, useState } from "react"
import usersActions from '../redux/actions/usersActions'
import { connect } from 'react-redux'

const Forms = (props) => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        mail: '',
        contraseña: '',
        imagen: '',
        pais: ''
    })

    const [usuarioLogueado, setUsuarioLogueado] = useState({
        mail: '',
        contraseña: '',
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

    const enviarDatos = async e => {
        e.preventDefault()
        if (props.form) {
            var respuesta = await props.nuevoUsuario(nuevoUsuario)
            if (respuesta) {
                setErrores(respuesta)
            }
        } else {
            props.loguearUsuario(usuarioLogueado)
        }
    }

    return (
        <div className="formularios">
            {
                props.form &&
                <div className="formSignUp">
                    <span style={{color: 'white'}}>
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
                        {
                            props.form ?
                                <button className="submit" type="submit" onClick={enviarDatos}>Sign Up</button>
                                : <button className="submitChico" type="submit" onClick={enviarDatos}>Log In</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listaPaises: state.users.paises,
    }
}

const mapDispatchToProps = {
    cargarPaises: usersActions.fetchPaises,
    nuevoUsuario: usersActions.nuevoUsuario,
    loguearUsuario: usersActions.loguearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)