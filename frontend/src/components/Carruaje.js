import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyit0BMCW3WbbDYwfrgR8DlYmBYO-kvukZA&usqp=CAU',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpZ7yd-sVBJFYduLrvkljJJ3UWvlgMwFC9w&usqp=CAU',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyit0BMCW3WbbDYwfrgR8DlYmBYO-kvukZA&usqp=CAU',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Carruaje = (props) => {
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
        key={item.src}
      >
        <div id="fotaso" style={{backgroundImage: `url(${item.src})`}}></div>
        {/* <img src={item.src} alt={item.altText} width="100%" height="60vh"/> */}
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carruaje;