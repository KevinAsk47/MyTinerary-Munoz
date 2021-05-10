import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import commentsActions from '../redux/actions/commentsActions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Comment = (props) => {

    const { comentario, borrarComentario, enviarComentarioActualizado } = props
    const [comentarioAModificar, setComentarioAModificar] = useState({ comentario: comentario.comentario })
    const [usuarioLegitimo, setUsuarioLegitimo] = useState(false)
    const [modificar, setModificar] = useState(false)

    useEffect(() => {
        if (props.usuario && (comentario.idUser.mail === props.usuario.mail)) {
            setUsuarioLegitimo(true)
        }
    },[usuarioLegitimo])

    const leerInput = (e) => {
        e.preventDefault()
        let value = e.target.value
        setComentarioAModificar({
            comentario: value
        })
    }

    const holanda = (e) => {
        if (e.key === "Enter") {
            enviarComentarioActualizado(comentario._id, comentarioAModificar)
            setModificar(false)
        }
    }

    const AbrirModificarComentario = () => {
        setModificar(!modificar)
    }

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
       <div className="comentarioNombre"> 
        <p>{comentario.idUser.usuario}:</p>
            <div key={comentario._id} className={(props.usuario && usuarioLegitimo) ? "comentarioDos" : "comentario"}>
                <div className="divComentario">
                    {
                        modificar && <div>
                            <input
                                className="modificarComentario"
                                type="text"
                                onKeyPress={holanda}
                                onChange={leerInput} value={comentarioAModificar.comentario}
                                name="comentario"
                            />
                        </div>
                    }
                    <span>{comentario.comentario}</span>
                </div>
                {
                    (props.usuario && usuarioLegitimo) &&
                    <div className="divBorrarYModificar">
                        <img className="borrarYModificar" onClick={AbrirModificarComentario} src="/img/redaccion.png" alt="" />
                        <img className="borrarYModificar" onClick={toggle} src="/img/tacho-de-basura.png" alt="" />
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                Are you sure to delete this comment?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => borrarComentario(comentario._id)}>Yes</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <div>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        usuario: state.users.users
    }
}

const mapDispatchToProps = {
    actualizarComentario: commentsActions.actualizarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)