import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import Comment from "./Comment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = (props) => {
    const [comentario, setComentario] = useState({ comentario: "", token: localStorage.getItem('token') })
    const [comentarioActualizado, setComentarioActualizado] = useState({ token: localStorage.getItem('token') })
    const { agregarComentario, setAgregarComentario } = props

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
        if (comentario.comentario === "") {
            toast.error("You cannot send an empty comment")
        } else {
            var respuesta = await props.fetchComentarios(comentario, props.idItinerario)
            setAgregarComentario(respuesta)
            setComentario({ comentario: "", token: localStorage.getItem('token') })
        }
    }

    const borrarComentario = async (id) => {
        var respuesta = await props.borrarComentario(id, props.idItinerario)
        setAgregarComentario(respuesta)
    }

    const enviarComentarioActualizado = async (e, id, comentarioAModificar) => {
        setComentarioActualizado({ ...comentarioActualizado, ...comentarioAModificar })
        if (e.key === "Enter") {
            var respuesta = await props.actualizarComentario(comentarioActualizado, props.idItinerario, id)
            setAgregarComentario(respuesta)
        }
    }

    return (
        <>
            <div className="cajaComentario">
                <div className="cajaDeComentarios">
                    {
                        agregarComentario.map((comentario) => {
                            return <Comment
                                key={comentario._id}
                                borrarComentario={borrarComentario}
                                enviarComentarioActualizado={enviarComentarioActualizado}
                                comentario={comentario}
                                agregarComentario={agregarComentario}
                            />
                        })
                    }
                </div>
                {
                    props.usuario ?
                    <form className="enviarComentario">
                        <p>Leave us your comment here!</p>
                        <div className="inputComentar">
                            <input type="text" onChange={leerInput} value={comentario.comentario} name="comentario" placeholder="Hello!" />
                            <div type="submit" onClick={comentar} style={{backgroundImage: `url(/img/enviar.png)`}}></div>
                        </div>
                    </form> : 
                    <div style={{marginTop: '3em'}}>
                        <p>You must sign in to make a comment.</p>
                    </div>
                }
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