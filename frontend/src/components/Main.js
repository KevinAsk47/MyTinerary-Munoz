import React, { useEffect, useState } from 'react';
import Ciudad from './Ciudad';
import {gsap} from 'gsap';

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
        <div className="main">
            <div class = "centered">
                <div class = "blob-1"></div>
                <div class = "blob-2"></div>
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
                    <h2 className="buscaTuCiudad">find the city you are looking for!</h2>
                    <input id="textInput" style={{width: "50vw"}} type="text" onChange={input} />
                </form>
            </div>
            <div className="itinerarios">
                {
                   city.data.length === 0 ? <img src="./img/noResult.gif" alt=""/> : city.data.map((ciudad) => {return <Ciudad key={ciudad._id} ciudad={ciudad} />})
                }
            </div>
        </main>
    )
}

export default Main

