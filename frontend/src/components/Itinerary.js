import { useEffect, useState } from "react"
import Activities from "./Activities";
import Comments from "./Comments";
import likesActions from '../redux/actions/likesActions';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';

const Itinerary = (props) => {

    const [verMas, setVerMas] = useState(false)
    const [liked, setLiked] = useState([])
    const [loadingLiked, setLoadingLike] = useState(true)
    const [usuario, setUsuario] = useState({ token: localStorage.getItem('token') })
    const [flag, setFlag] = useState(false)
    const [agregarComentario, setAgregarComentario] = useState(props.itinerario.comentarios)

    useEffect(() => {
        setLiked(props.itinerario.userLiked)
        if (props.usuario && props.itinerario.userLiked.includes(props.usuario.mail)) {
            setFlag(true)
        }
    },[])

    const ver = () => {
        setVerMas(!verMas)
    }

    const likes = async () => {
        if (props.usuario) {
            setLoadingLike(false)
                var respuesta = await props.likear(props.itinerario._id, usuario)
                setLiked(respuesta.likeItinerario.userLiked)
                setFlag(!respuesta.flag)
            setLoadingLike(true)
        }else{
            toast.warn("You must log in to perform this action ⚠️")
        }
    }

    return (
        <div className="initeraryMain">
            <div className="itineraryPresentacion">
                <div className="nombreGuia">
                    <span style={{ marginTop: '10px' }}>¡Hi! I'am</span>
                    <p>{props.itinerario.personaNombre}</p>
                </div>
                <div style={{ backgroundImage: `url(${props.itinerario.personaImagen})` }} className="fotoPresentacion"></div>
                <div className="infoPresentacion">
                    <div className="bannerPresentacion" style={{ backgroundImage: `url(${props.itinerario.banner})` }} >
                        <h2>{props.itinerario.titulo}</h2>
                    </div>
                    <div className="hastagItinerario">
                        {
                            props.itinerario.hashtag.map((hashtag, index) => <p key={index} className="hastashs">{hashtag}</p>)
                        }
                    </div>
                    <div className="infoAdicional">
                        <div className="billetes">
                            {
                                Array(props.itinerario.precio).fill(props.itinerario.precio).map((billete, index) => {
                                    return (<img key={index} src="/img/division.png" alt="" />)
                                })
                            }
                        </div>
                        <div className="reloj">
                            <p>{props.itinerario.duracion}hs</p>
                            <img style={{ width: '50px' }} src="/img/reloj.png" alt="" />
                        </div>
                        <div className="likes"> 
                            <p>{liked.length}</p>
                            <img onClick={loadingLiked ? likes : null} className="likeDisLike" src={!flag ? "/img/me-gusta.png" : "/img/no-me-gusta.png" } alt="" />
                        </div>
                    </div>
                    <div className="comentarios">
                        {
                            verMas && <div className="masInfoItinerario">
                                <div className="activities">
                                    <Activities idItinerario={props.itinerario._id} />
                                </div>
                                <div>
                                    <Comments
                                    idItinerario={props.itinerario._id} 
                                    agregarComentario={agregarComentario}
                                    setAgregarComentario={setAgregarComentario}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className="botonVerMas">
                        <button type="button" className="leerMas" onClick={ver}>{verMas ? 'Show less' : 'Show more'}</button>
                    </div>
                </div>
            </div>
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
    )
}

const mapStateToProps = state => {
    return {
        usuario: state.users.users,
    }
}

const mapDispatchToProps = {
    likear: likesActions.likearItinerario,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)