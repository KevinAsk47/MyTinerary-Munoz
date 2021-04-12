import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselHome from '../components/Carousel'

export default class Home extends React.Component {
    render(){

        return(
            <>
                <Header />
                <CarouselHome />
                <Footer />
            </>
        )
    }
}

