import React, { useEffect, useState } from 'react';
import Ciudad from './Ciudad';

const Main = () => {

    const [city, setCity] = useState({
        data: [],
        loading: false,
    })

    const [error, setError] = useState(false)

    const [copiaOriginal, setCopiaOriginal] = useState([])

    useEffect(() => {

        fetchDates()

    }, [])

    const fetchDates = async () => {
        try {
            var respuesta = await fetch("http://localhost:4000/api/ciudades", {
                method: "get"
            })

            var data = await respuesta.json()

            if (data.succes === false) {
                console.log(data.repuesta)
                
            } else{
                setCity({
                    data: data.respuesta,
                    loading: true,
                })
    
                setCopiaOriginal(data.respuesta)
            }


        } catch (error) {

            setError({
                error: true,
            })
        }
    }

    const input = e => {

        var input = e.target.value.toLocaleLowerCase().trim()

        var ciudadesFiltrados = copiaOriginal.filter((ciudad) => ciudad.titulo.toLocaleLowerCase().trim().indexOf(input) === 0)

        setCity({
            data: ciudadesFiltrados,
        })

    };

    if (error.error === true) {
        return (
            <main>
                <div style={{ backgroundImage: "url(/img/mirando.jpg)" }} className="main">
                    <div className="tituloCity">
                        <div>
                            <h1 className="textTip">CITIES</h1>
                        </div>
                    </div>
                    <div className="globo"><div className="frontal"></div><div className="mapfront"></div><div className="mapback"></div><div className="back"></div></div>
                </div>
                <div className="filtro">
                    <form>
                        <h2 className="buscaTuCiudad">find the city you are looking for!</h2>
                        <input id="textInput" style={{ width: "50vw", borderRadius: "10px", textAlign: "center" }} type="search" placeholder="Search" aria-label="Search" onChange={input} />
                    </form>
                </div>
                <div className="serverCaido">
                    <h3>An unexpected error has occurred with our servers</h3>
                    <img src="/img/hosting.gif" alt=""/>
                </div>
            </main>
        )
    }

    if (city.loading === false) {

        return (
            <div className="preloader">
                <div className="blob-1"></div>
                <div className="blob-2"></div>
            </div>
        )
    }

    return (
        <main>
            <div style={{ backgroundImage: "url(/img/mirando.jpg)" }} className="main">
                <div className="tituloCity">
                    <div>
                        <h1 className="textTip">CITIES</h1>
                    </div>
                </div>
                <div className="globo"><div className="frontal"></div><div className="mapfront"></div><div className="mapback"></div><div className="back"></div></div>
            </div>
            <div className="filtro">
                <form>
                    <h2 className="buscaTuCiudad">find the city you are looking for!</h2>
                    <input id="textInput" style={{ width: "50vw", borderRadius: "10px", textAlign: "center" }} type="search" placeholder="Search" aria-label="Search" onChange={input} />
                </form>
            </div>
            <div className="itinerarios">
                {
                    city.data.length === 0 ? <img src="./img/noResult.gif" alt="" /> : city.data.map((ciudad) => { return <Ciudad key={ciudad._id} ciudad={ciudad} /> })
                }
            </div>
        </main>
    )
}

export default Main

