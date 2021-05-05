import { useEffect } from "react"
import { connect } from 'react-redux';
import ciudadesActions from '../redux/actions/ciudadesActions';

const Comments = (props) => {

    useEffect(() => {
       /*  props.fetchComentarios() */
    }, [])

    const comentar = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="cajaComentario">
                <div className="cajaDeComentarios">
                    {
                        props.comentarios.map(comentario => {
                            <div>
                                <p>{comentario.idUser}</p>
                                <p>{comentario.comentario}</p>
                            </div>
                        })
                    }
                </div>
                <form className="enviarComentario">
                    <input type="text" />
                    <button type="submit" onClick={comentar}>Enviar</button>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    fetchComentarios: ciudadesActions.fetchComentarios
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)