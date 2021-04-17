import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Itinerary from '../components/Itinerary';

export default class Home extends React.Component {

    state = {
        ciudad: [],
    }

    componentDidMount() {

        this.fetchDates()

    } 

    fetchDates = async () => {

        var idCiudad = this.props.match.params.id

        try {
            var respuesta = await fetch("http://localhost:4000/api/ciudad/" + idCiudad,{
                method: "get"
            })

            var data = await respuesta.json()

            this.setState({ciudad: data.respuesta})

        } catch (error) {
    
        }

    }

    render(){

        return(
            <>
                <Header />
                <Itinerary ciudad={this.state.ciudad} />
                <Footer />
            </>
        )
    }
}