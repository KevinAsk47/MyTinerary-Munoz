import React from 'react';
import Footer from '../components/Footer';
import Forms from '../components/Forms';
import Header from '../components/Header';


export default class SignUp extends React.Component{
    render(){
        return(
            <>
                <Header />
                <Forms form={true} />
                <Footer />
            </>  
        )
    }
}