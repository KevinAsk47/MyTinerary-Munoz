import React, { useEffect, useState } from 'react';
import Ciudad from './Ciudad';
import {connect} from 'react-redux'
import ciudadesActions from '../redux/actions/ciudadesActions'

const Main = (props) => {

    useEffect(() => {
        props.cargarCiudades()
    }, [])

    if (props.error) {
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
                        <input id="textInput" style={{ width: "50vw", borderRadius: "10px", textAlign: "center", padding: "6px 0 6px 0"}} type="search" placeholder="Search" aria-label="Search" onChange={(e)=> props.search(e.target.value)} />
                    </form>
                </div>
                <div className="serverCaido">
                    <h3>An unexpected error has occurred with our servers</h3>
                    <img src="/img/hosting.gif" alt=""/>
                </div>
            </main>
        )
    }

    if (props.loader) {
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
                    <input id="textInput" style={{ width: "50vw", borderRadius: "10px", textAlign: "center", padding: "6px 0 6px 0"}} type="search" placeholder="Search" aria-label="Search" onChange={(e)=> props.search(e.target.value)} />
                </form>
            </div>
            <div className="itinerarios">
                {
                    props.listaCiudades.length === 0 ? <img className="notFound" src="./img/notFound.gif" alt="" /> : props.listaCiudades.map((ciudad) => { return <Ciudad key={ciudad._id} ciudad={ciudad} /> })
                }
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
       listaCiudades: state.ciudades.ciudades,
       loader: state.ciudades.loading,
       error: state.ciudades.error
    }
}

const mapDispatchToProps = {
    cargarCiudades: ciudadesActions.fetchCiudades,
    search: ciudadesActions.search
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

