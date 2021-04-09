import React, { useState } from 'react';
import Slide from './Slide'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
[
            
    {id: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA3ivzz6OyLBH1xlwm99ntFkq7N__fAcL4w&usqp=CAU"},
    {id: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRce40i8eGDuqqwpB1uQ4NFmMgWjMc19_f-Ew&usqp=CAU"},
    {id: 3, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpZ7yd-sVBJFYduLrvkljJJ3UWvlgMwFC9w&usqp=CAU"},
    {id: 4, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyit0BMCW3WbbDYwfrgR8DlYmBYO-kvukZA&usqp=CAU"},
],


[   

    {id: 5, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbneTtp3yJiV702KawNAiZcxU4O9wybaCiCQ&usqp=CAU"},
    {id: 6, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToayUbCPx_LVzBAlHf5ezAuQ4ghtLilwOHUQ&usqp=CAU"},
    {id: 7, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsuyWVDVbZC0nQkIcNmA_ZTK5XmkJLOyGNA&usqp=CAU"},
    {id: 8, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhDoVsoGFbVs3t1ZjPHKcBq3bj8Z1WpDQxg&usqp=CAU"},  
],


[

    {id: 9, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvS6t2Hh23ZPrZskuVrIJIrzJ9v_oqjqeetg&usqp=CAU"},
    {id: 10, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTp89oHljQEsuvuFkoL8ck0eqi851jY42CKA&usqp=CAU"},
    {id: 11, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6uQy-DXc1LohB4JjnvjQ_vqvu5eMSi-O8g&usqp=CAU"},
    {id: 12, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ocretd8EDyVmwQ5gBLYYOpZ5VLaOBdz2cw&usqp=CAU"},   

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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key=""

      >
        <div className="carousel-item active"><Slide arrayItem={item} /></div> 

      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="contenedorCarrousel" >
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default CarouselHome;