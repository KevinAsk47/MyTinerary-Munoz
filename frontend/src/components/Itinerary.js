import { useState } from "react"
import Activities from "./Activities";
import Comments from "./Comments";

const Itinerary = (props) => {

    const [verMas, setVerMas] = useState(false)

    const ver = () => {
        setVerMas(!verMas)
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
                                    return (<img key={index} style={{ width: '50px', margin: '5px' }} src="/img/division.png" alt="" />)
                                })
                            }
                        </div>
                        <div className="reloj">
                            <p>{props.itinerario.duracion}hs</p>
                            <img style={{ width: '50px' }} src="/img/reloj.png" alt="" />
                        </div>
                        <div className="likes">
                            <p>{props.itinerario.likes}</p>
                            <img style={{ width: '50px' }} src="/img/me-gusta.png" alt="" />
                        </div>
                    </div>
                    <div className="comentarios">
                        {
                            verMas && <div className="masInfoItinerario">
                                <div className="activities">
                                    <Activities idItinerario={props.itinerario._id} />
                                </div>
                                <div className="comentarios">
                                    <Comments comentarios={props.itinerario.comentarios} />
                                </div>
                            </div>
                        }
                    </div>
                    <div className="botonVerMas">
                        <button type="button" className="leerMas" onClick={ver}>{verMas ? 'Show less' : 'Show more'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary