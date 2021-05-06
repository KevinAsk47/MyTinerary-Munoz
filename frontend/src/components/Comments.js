import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';

const Comments = (props) => {

    const [comentario, setComentario] = useState({ comentario: "", token: localStorage.getItem('token') })
    const [agregarComentario, setAgregarComentario] = useState(props.comentarios)

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
        var respuesta = await props.fetchComentarios(comentario , props.idItinerario)
        setAgregarComentario(respuesta)
    }

    const borrarComentario = async (e) =>{
        let id = e.target.id
        var respuesta = await props.borrarComentario(id , props.idItinerario)
        console.log(respuesta) 
    }


    return (
        <>
            <div className="cajaComentario">
                <div className="cajaDeComentarios">
                    {
                        props.usuario ? agregarComentario.map((comentario) => {
                            return (
                                <div key={comentario._id} className="comentario">
                                   {/*  <p>{comentario.idUser.nombre}</p> */}
                                    <p style={{color: 'red'}}>{comentario.comentario}</p>
                                    <button id={comentario._id} onClick={borrarComentario}>x</button>
                                </div>
                            )
                        }) :
                        props.comentarios.map((comentario) => {
                            return (
                                <div key={comentario._id} className="comentario">
                                   {/*  <p>{comentario.idUser.nombre}</p> */}
                                    <p style={{color: 'red'}}>{comentario.comentario}</p>
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
    borrarComentario: commentsActions.borrarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)