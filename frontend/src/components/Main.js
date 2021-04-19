import React, { useEffect, useState } from 'react';
import Ciudad from './Ciudad';

const Main = () => {

    const [city, setCity] = useState({
        data: [],
        loading: true,
    })

    const [copiaOriginal, setCopiaOriginal] = useState([])

    const [error, setError] = useState(false)

    useEffect(() => {
        fetchInfo()
    }, [])

    const fetchInfo = async () => {
        try {
            var respuesta = await fetch("http://localhost:4000/api/ciudades")
            var data = await respuesta.json()
            if (!data.success) {
                console.log(data.repuesta)               
            } else{
                setCity({data: data.respuesta, loading: false})
                setCopiaOriginal(data.respuesta)
            }
        } catch (error) {
            setError(true)
        }
    }

    const input = e => {
        var input = e.target.value.toLocaleLowerCase().trim()
        var ciudadesFiltradas = copiaOriginal.filter((ciudad) => ciudad.titulo.toLocaleLowerCase().trim().indexOf(input) === 0)
        setCity({
            data: ciudadesFiltradas,
        })
    }

    if (error) {
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

    if (city.loading) {
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
                    <input id="textInput" style={{ width: "50vw", borderRadius: "10px", textAlign: "center", padding: "6px 0 6px 0"}} type="search" placeholder="Search" aria-label="Search" onChange={input} />
                </form>
            </div>
            <div className="itinerarios">
                {
                    city.data.length === 0 ? <img className="notFound" src="./img/notFound.gif" alt="" /> : city.data.map((ciudad) => { return <Ciudad key={ciudad._id} ciudad={ciudad} /> })
                }
            </div>
        </main>
    )
}

export default Main

