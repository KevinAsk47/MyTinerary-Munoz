import React, { useState } from 'react';
import Slide from './Slide'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [

[
            
    {id: 1, titulo: "Paris, France", imagen: "https://www.viajarafrancia.com/wp-content/uploads/2016/04/Paris-760x500.jpg"},
    {id: 2, titulo: "New York, USA", imagen: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/EEUU_NuevaYork_500px_85866303_Roman%20Slavik_500px.jpg?itok=R4B_r6bN"},
    {id: 3, titulo: "London, England, UK", imagen: "https://image.freepik.com/foto-gratis/tower-bridge-crepusculo-nocturno-londres-inglaterra-reino-unido_117856-2100.jpg"},
    {id: 4, titulo: "Venice, Italy", imagen: "https://guias-viajar.com/italia/wp-content/uploads/2017/03/italia-venecia-puente-rialto-21.jpg"},
],


[   

    {id: 5, titulo: "Vancouver, Canada", imagen: "https://i0.wp.com/cbnnoticias.com/wp-content/uploads/2019/08/Vancouver-desde-drone.png?fit=743%2C411"},
    {id: 6, titulo: "Barcelona, ​​Catalonia, Spain", imagen: "https://thumbs.dreamstime.com/b/vista-superior-a%C3%A9rea-de-barcelona-catalu%C3%B1a-espa%C3%B1a-palau-nacional-palacio-nacional-art-museum-nacional-de-catalu%C3%B1a-90813512.jpg"},
    {id: 7, titulo: "Cape Town, South Africa", imagen: "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/04/Que-ver-en-Ciudad-del-Cabo-10-Lugares-que-no-te-puedes-perder.jpg"},
    {id: 8, titulo: "Sydney, australia", imagen: "https://www.saulsaidel.com/wp-content/uploads/2020/08/sydney-australia.jpg.webp"},  
],


[

    {id: 9, titulo: "Rome, Italy", imagen: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg"},
    {id: 10, titulo: "Singapore", imagen: "https://www.atptour.com/es/scores/current/singapore/9460/www.atptour.com/-/media/images/atp-tournaments/tournament-images/singapore_tournimage_2021.jpg"},
    {id: 11, titulo: "Lisbon, Portugal", imagen: "https://www.gavelintl.com/wp-content/uploads/2018/10/lisbon-portugal.jpg"},
    {id: 12, titulo: "Amsterdam, netherlands", imagen: "https://ayfnhq.org/wp-content/uploads/2020/02/mini-mba-course-to-amsterdam-1130x650.jpg"},   

]
];

const CarouselHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className="carousel-item active"><Slide arrayItem={item} /></div> 

      </CarouselItem>
    );
  });

  return (
    <div style={{backgroundImage: `url(./img/airplane.jpg)`}} className="contenedorCarrousel" >
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl className="prev" direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl className="next" direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default CarouselHome;