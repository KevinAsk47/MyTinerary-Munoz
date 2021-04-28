import { useEffect, useState } from "react"
import usersActions from '../redux/actions/usersActions'
import { connect } from 'react-redux'
import axios from 'axios'

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

    useEffect(() => {
        props.cargarPaises()
    }, [])

    const leerInput = (e) => {
        setNuevoUsuario({
          ...nuevoUsuario,
          [e.target.name]: e.target.value
        })
    }
    
    const enviarDatos = async e => {
        e.preventDefault()
        const respuesta = await axios.post('http://localhost:4000/api/user/signUp', nuevoUsuario)
        console.log(respuesta)
    }

    return (
        <div className="formularios">
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
                    <input className="inp" type="email" placeholder="E-mail" onChange={leerInput} value={nuevoUsuario.mail} name="mail" />
                    <input className="inp" type="password" placeholder="Password" onChange={leerInput} value={nuevoUsuario.contraseña} name="contraseña" />
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
                            :<button className="submitChico" type="submit" onClick={enviarDatos}>Log In</button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)