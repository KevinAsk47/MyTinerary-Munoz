const Itinerary = ({itinerario}) => {

    console.log(itinerario)
    return (
        <div className="initeraryMain">
            <div className="itineraryPresentacion">
                <div style={{ backgroundImage: `url(${itinerario.personaImagen})` }} className="fotoPresentacion"></div>
                <div className="infoPresentacion">
                    <h2>{itinerario.titulo}</h2>
                    <p>{itinerario.hashtag}</p>
                    <div>
                        <p>{itinerario.precio}</p>
                        <p>{itinerario.duracion}</p>
                        <p>{itinerario.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*     precio: {type: Number, required: true, min: 1, max: 5},
    duracion: {type: Number, required: true},
    likes: {type: Number, default: 0, min: 0}, */

{/* <img className="enConstrucion" src="/img/const.png" alt=""/> */ }

export default Itinerary