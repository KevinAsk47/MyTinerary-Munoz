import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import Comment from "./Comment";

const Comments = (props) => {

    const [comentario, setComentario] = useState({ comentario: "", token: localStorage.getItem('token') })
    const [comentarioActualizado, setComentarioActualizado] = useState({ token: localStorage.getItem('token') })
    const [agregarComentario, setAgregarComentario] = useState([])

    useEffect(() => {
        setAgregarComentario(props.comentarios)
    },[])

    const leerInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setComentario({
            ...comentario,
            [name]: value
        })
    }

    const comentar = async (e) => {
        e.preventDefault()
        var respuesta = await props.fetchComentarios(comentario, props.idItinerario)
        setAgregarComentario(respuesta)
    }

    const borrarComentario = async (id) => {
        var respuesta = await props.borrarComentario(id, props.idItinerario)
        setAgregarComentario(respuesta)
    }

    const enviarComentarioActualizado = async ( e, id, comentarioAModificar ) => {
        setComentarioActualizado({...comentarioActualizado,...comentarioAModificar})
        if (e.key === "Enter") {
            var respuesta = await props.actualizarComentario(comentarioActualizado, props.idItinerario, id)
            setAgregarComentario(respuesta)
        }
    }

    console.log(agregarComentario)
    console.log(props.comentarios)

    return (
        <>
            <div className="cajaComentario">
                <div className="cajaDeComentarios">
                    {
                        props.usuario ? agregarComentario.map((comentario) => {
                            return <Comment
                            key={comentario._id} 
                            borrarComentario={borrarComentario} 
                            enviarComentarioActualizado={enviarComentarioActualizado}
                            comentario={comentario}
                            agregarComentario={agregarComentario}
                            />
                        }) :
                            props.comentarios.map((comentario) => {
                                return (
                                    <div key={comentario._id} className="comentario">
                                        <p>{comentario.idUser.nombre}</p> 
                                        <p style={{ color: 'red' }}>{comentario.comentario}</p>
                                    </div>
                                )
                            })
                    }
                </div>
                <form className="enviarComentario">
                    <input type="text" onChange={leerInput} value={comentario.comentario} name="comentario" />
                    <button type="submit" onClick={comentar}>Enviar</button>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        usuario: state.users.users
    }
}

const mapDispatchToProps = {
    fetchComentarios: commentsActions.fetchComentarios,
    borrarComentario: commentsActions.borrarComentario,
    actualizarComentario: commentsActions.actualizarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)