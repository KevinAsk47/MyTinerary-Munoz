import { useState } from "react"

const Itinerary = ({ itinerario }) => {

    const [verMas, setVerMas] = useState(false)

    const ver = () => {
        setVerMas(!verMas)
    }

    return (
        <div className="initeraryMain">
            <div className="itineraryPresentacion">
                <div className="nombreGuia">
                    <span style={{ marginTop: '10px' }}>¡Hi! I'am</span>
                    <p>{itinerario.personaNombre}</p>
                </div>
                <div style={{ backgroundImage: `url(${itinerario.personaImagen})` }} className="fotoPresentacion"></div>
                <div className="bannerPresentacion" style={{ backgroundImage: `url(${itinerario.banner})` }} ></div>
                <div className="infoPresentacion">
                    <div className="nombreItinerario">
                        <h2>{itinerario.titulo}</h2>
                        {
                            itinerario.hashtag.map((hashtag, index) => <p key={index} className="hastashs">{hashtag}</p>)
                        }
                    </div>
                    <div className="infoAdicional">
                        <div className="billetes">
                            {
                                Array(itinerario.precio).fill(itinerario.precio).map((billete, index) => {
                                    return (<img key={index} style={{ width: '50px', margin: '5px' }} src="/img/division.png" alt="" />)
                                })
                            }
                        </div>
                        <div className="reloj">
                            <p>{itinerario.duracion}hs</p>
                            <img style={{ width: '50px' }} src="/img/reloj.png" alt="" />
                        </div>
                        <div className="likes">
                            <p>{itinerario.likes}</p>
                            <img style={{ width: '50px' }} src="/img/me-gusta.png" alt="" />
                        </div>
                    </div>
                </div>
                <button type="button" className="leerMas" onClick={ver}>{verMas ? 'Show less' : 'Show more'}</button>
            </div>
            {
                verMas && <div className="masInfoItinerario"><img className="enConstrucion" src="/img/const.png" alt="" /></div>
            }
        </div>
    )
}

export default Itinerary