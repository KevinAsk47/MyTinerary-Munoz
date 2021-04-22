import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Itinerary from '../components/Itinerary';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import ciudadesActions from '../redux/actions/ciudadesActions'

class Itineraries extends React.Component {

/*     state = {
        ciudad: null,
        loader: true,
        error: false
    }
*/

    componentDidMount = () => {
        var idCiudad = this.props.match.params.id
        this.props.cargarCiudad(idCiudad)
        console.log(this.props.listaCiudad)
    }
/* 
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

    } */

    render() {
/*         if (this.state.error) {
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
        } */
        return (
            <>
                <Header />
                <Itinerary ciudad={this.props.listaCiudad} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
       listaCiudad: state.ciudades.ciudades
    }
}

const mapDispatchToProps = {
    cargarCiudad: ciudadesActions.ciudadIndividual
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries)