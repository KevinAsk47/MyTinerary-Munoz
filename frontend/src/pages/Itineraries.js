import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Itinerary from '../components/Itinerary';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {

    state = {
        ciudad: null,
        loader: true,
        error: false
    }

    componentDidMount = () => {
        this.fetchInfo()
    }

    fetchInfo = async () => {
        var idCiudad = this.props.match.params.id

        try {
            var respuesta = await fetch("http://localhost:4000/api/ciudad/" + idCiudad)
            var data = await respuesta.json()
            if (data.success) {
                this.setState({ ciudad: data.respuesta, loader: false })
            } else {
                console.log(data.respuesta)
                this.setState({ error: true })
            }
        } catch (error) {
            this.setState({ error: true })
        }

    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <Header />
                    <div className="serverCaido">
                        <h3>An unexpected error has occurred with our servers</h3>
                        <img src="/img/hosting.gif" alt="" />
                    </div>
                    <div className="itineraryButton">
                        <NavLink to="/Cities"><button className="button">Go back to cities</button></NavLink><NavLink to="/"><button className="button">Home</button></NavLink>
                    </div>
                    <Footer />
                </>
            )
        }

        if (this.state.loader) {
            return (
            <div className="preloader">
                <div className="blob-1"></div>
                <div className="blob-2"></div>
            </div>)
        }

        return (
            <>
                <Header />
                <Itinerary ciudad={this.state.ciudad} />
                <Footer />
            </>
        )
    }
}