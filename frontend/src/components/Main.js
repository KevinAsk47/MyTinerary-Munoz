import React, { useEffect, useState } from 'react';
import Ciudad from './Ciudad';

const Main = () => {

    const [city,setCity] = useState({
        data : [],
        loading: false,
    })

    const [copiaOriginal,setCopiaOriginal] = useState({
        original: [],
    })

    useEffect(()=>{

        fetchDates()

    },[])

    const fetchDates = async () => {
        try {
            var respuesta = await fetch("http://localhost:4000/api/ciudades",{
                method: "get"
            })

            var data = await respuesta.json()

            setCity({
                data: data.respuesta,
                loading: true,
            })

            setCopiaOriginal({
                original: data.respuesta,
            })


        } catch (error) {
    
        }
    }

    const input = e => {

        var input = e.target.value.toLocaleLowerCase().trim()

        var ciudadesFiltrados = copiaOriginal.original.filter((ciudad) => ciudad.titulo.toLocaleLowerCase().trim().indexOf(input) === 0)

        setCity({
            data: ciudadesFiltrados,
        })

    };

    if (city.loading === false) {
       return (
        <div className="itinerarios">
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
       )
    }
 
    return (
        <main>
            <div className="main">
                <h1 className="tituloCity">Cities</h1>
                <div className="globo"><div className="frontal"></div><div className="mapfront"></div><div className="mapback"></div><div className="back"></div></div>
            </div>
            <div className="filtro">
                <form>
                <input id="text" type="text" onChange={input} />
                </form>
            </div>
            <div className="itinerarios">
                {
                   city.data.length === 0 ? <div className="card"><h1>No hay resultados</h1></div> : city.data.map((ciudad) => {return <Ciudad key={ciudad.id} ciudad={ciudad} />})
                }
            </div>
        </main>
    )
}

export default Main

