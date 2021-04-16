import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default class extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <div>
                <h3>hola soy la ciudad {this.props.match.params.id}</h3>
                </div> 
                <Footer/>
            </>
        )
    }
}