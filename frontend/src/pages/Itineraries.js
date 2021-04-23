import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Itinerary from '../components/Itinerary';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { gsap } from 'gsap';
import ciudadesActions from '../redux/actions/ciudadesActions'

class Itineraries extends React.Component {

    state = {
        ciudad: [],
    }

    scroll = () => {
        window.scroll({
            top: 525,
            left: 525,
            behavior: 'smooth'
        });
    }

    componentDidMount = () => {
        const city = this.props.listaCiudad.find(ciudad => ciudad._id === this.props.match.params.id)
        this.setState({ ciudad: city })   
        this.props.cargarItinerarios(this.props.match.params.id)

        gsap.to("#ciudadIndividual", {
            duration: 1,
            scaleX: 2,
            scaleY: 2

        });
        gsap.to("#pink", {
            duration: 1,
            rotationY: 360,
            repeat: -1,
        })
    }

    render() {   
        if (this.props.error) {
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

        return (
            <>
                <Header />
                <div className="itinerary">
                    <div className="banner" style={{ backgroundImage: `url(${this.state.ciudad.imagen})` }}>
                        <div>
                            <img id="pink" style={{ width: '50px', paddingBottom: '1em' }} src={this.state.ciudad.bandera} alt="" />
                        </div>
                        <div className="tituloBanner">
                            <h2 id="ciudadIndividual">{this.state.ciudad.titulo}</h2>
                            <h2 style={{ padding: "8px 0 0 0" }}>{this.state.ciudad.pais}</h2>
                            <p className="descripcion" style={{ padding: '0 1em 0 1em' }}>{this.state.ciudad.descripcion}</p>
                        </div>
                    </div>
                        {
                            this.props.itinerarios.map((itinerario) => {
                                return <Itinerary key={itinerario._id} itinerario={itinerario} />
                            })
                        }
                    <div className="itineraryButton">
                        <NavLink to="/Cities"><button onClick={this.scroll} className="button">Go back to cities</button></NavLink><NavLink to="/"><button className="button">Home</button></NavLink>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        listaCiudad: state.ciudades.ciudades,
        error: state.ciudades.error,
        itinerarios: state.ciudades.itinerarios
    }
}

const mapDispatchToProps = {
    cargarItinerarios: ciudadesActions.fetchItinerarios
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)