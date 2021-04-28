import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Forms from '../components/Forms'

export default class LogIn extends React.Component{
    render(){
        return(
            <>
                <Header />
                <Forms form={false} />
                <Footer />
            </>  
        )
    }
}