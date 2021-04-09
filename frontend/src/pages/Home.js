import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Invitados from '../components/Main';
import CarouselHome from '../components/Carousel'

export default class Home extends React.Component {
    render(){

        var misInvitados = [
            {id: 1, nombre: "Kevin", apellido: "Muñoz", edad: 22, img: "https://www.ecestaticos.com/imagestatic/clipping/8f1/bd2/8f1bd2867fab8e4700627e30a4d42c59.jpg"},
            {id: 2, nombre: "Celeste", apellido: "Mendez", edad: 25, img: "https://static3.abc.es/media/bienestar/2019/10/01/personas-magneticas-k02H--1200x630@abc.jpg"},
            {id: 3, nombre: "Hernan", apellido: "Campos", edad: 27, img: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/secretos-de-personas-que-permanecen-positivas-en-las-peores-circunstancias-643x342.jpg"},
            {id: 4, nombre: "Geogina", apellido: "Rodriguez", edad: 49, img: "https://img.bekiapsicologia.com/articulos/portada/78000/78631.jpg"},
        ]

        return(
            <>
                <Header />
                {misInvitados.map((invitado) => {
                    return <Invitados key={invitado.id} invitado = {invitado} />
                })}
                <CarouselHome />
                <Footer />
            </>
        )
    }
}

