import React from 'react';
import Footer from '../components/Footer';
import Forms from '../components/Forms';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


export default class SignUp extends React.Component{
    render(){
        const signup = ["nombre","apellido","usuario","mail","contraseña","imagen"]
        return(
            <>
                <Header />
                <Forms form={true} history={this.props.history} signup={signup} >
                <div className="formSignUp">
                    <img style={{width: '15vw'}} src="/img/logoDos.png" alt=""/>
                    <h2>Sign up for free!</h2>
                    <p>Are you already registered?</p>
                    <p>Click <Link to="/LogIn">Here</Link> </p>
                </div>
                </Forms>
                <Footer />
            </>  
        )
    }
}