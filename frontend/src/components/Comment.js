import { useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';

const Comment = (props) => {

    const { comentario , borrarComentario, enviarComentarioActualizado } = props
    const [comentarioAModificar, setComentarioAModificar] = useState({ comentario: comentario.comentario })
    const [modificar, setModificar] = useState(false)

    const leerInputDos = (e) => {
        e.preventDefault()
        let value = e.target.value
        setComentarioAModificar({
            comentario: value
        })
    }

    const AbrirModificarComentario = () => {
        setModificar(!modificar)
    }

    return (

        <>
            <div key={comentario._id} className="comentario">
                {/*  <p>{comentario.idUser.nombre}</p> */}
                <p style={{ color: 'red' }}>{comentario.comentario}</p>
                <button onClick={()=>borrarComentario(comentario._id)}>x</button>
                <button onClick={AbrirModificarComentario}>modif</button>
            </div>
            {
                modificar && <div>
                    <input type="text" onKeyPress={(e)=>enviarComentarioActualizado( e, comentario._id, comentarioAModificar )} onChange={leerInputDos} value={comentarioAModificar.comentario} name="comentario" />
                </div>
            }
        </>

    )
}

const mapDispatchToProps = {
    actualizarComentario: commentsActions.actualizarComentario
}

export default connect(null, mapDispatchToProps)(Comment)