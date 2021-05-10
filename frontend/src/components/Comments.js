import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import Comment from "./Comment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Comments = (props) => {
    const [comentario, setComentario] = useState({ comentario: "", token: localStorage.getItem('token') })
    const [loadingComentario, setLoadingComentario] = useState(true)
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
        if (/^\s+|\s+$/.test(comentario.comentario) || comentario.comentario === "") {
            toast.error("You cannot send an empty comment")
        } else {
            setLoadingComentario(false)
                var respuesta = await props.fetchComentarios(comentario, props.idItinerario)
                setAgregarComentario(respuesta)
                setComentario({ comentario: "", token: localStorage.getItem('token') })
            setLoadingComentario(true)
        }
    }

    const borrarComentario = async (id) => {
        var respuesta = await props.borrarComentario(id, props.idItinerario)
        setAgregarComentario(respuesta)
    }

    const enviarComentarioActualizado = async (id, comentarioAModificar) => {
        var respuesta = await props.actualizarComentario(comentarioAModificar, props.idItinerario, id)
        setAgregarComentario(respuesta)
    }

    return (
        <>
            <div className="cajaComentario">
                <div className="cajaDeComentarios">
                    {
                        agregarComentario.length === 0 ? <h2>No comment</h2> 
                        :agregarComentario.map((comentario) => {
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
                            <input type="text" onChange={leerInput} value={comentario.comentario} name="comentario" placeholder="Hello!" required />
                            <div type="submit" onClick={ loadingComentario ? comentar : null} style={{backgroundImage: `url(/img/enviar.png)`}}></div>
                        </div>
                    </form> : 
                    <div className="noLogin">
                        <p>You must sign in to make a comment.</p>
                        <p>Create an account right now by click <Link to="/signup">here</Link></p>
                        <p>Or if you already have an account log in <Link to="/login">here</Link></p>
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