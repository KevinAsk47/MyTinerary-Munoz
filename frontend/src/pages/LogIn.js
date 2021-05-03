import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Forms from '../components/Forms'

export default class LogIn extends React.Component{
    render(){
        const login = ["mail","contraseña"]
        return(
            <>
                <Header />
                <Forms form={false} history={this.props.history} login={login} /> 
                <Footer />
            </>  
        )
    }
}