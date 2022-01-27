import React, { useState } from 'react';
import NukaCarousel from 'nuka-carousel';
// import mario from '../../assets/cakes/mario_pastel.jpg';
// import tartaleta from '../../assets/tartaleta_fresa.jpg';
// import cristal from '../../assets/torta_cristal.jpg';
// import decorada from '../../assets/torta_decorada.jpg';
// import universitario from '../../assets/torta_u.jpg';
import { CarouselWrapper } from './styles';
import { NavBarCarousel } from './components/NavBarCarousel';
import { SlideCarousel } from './components/SlideCarousel';

import categories from '../../json/body.json';

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [category, setCategory] = useState('cakes');

  // let posters = [mario, tartaleta, cristal, decorada, universitario];
  let timer;
  // console.log(category);
  return (
    <CarouselWrapper>
      <NavBarCarousel setCategory={setCategory} />

      <NukaCarousel
        autoplay
        slideIndex={slideIndex}
        beforeSlide={() => {
          clearTimeout(timer);
        }}
        afterSlide={(slideIndex) => {
          if (slideIndex === categories[category].length - 1) {
            timer = setTimeout(() => setSlideIndex(0), 10000);
          } else {
            setSlideIndex(slideIndex);
          }
        }}
        slideWidth='920px'
        width='920px'
        height='100%'
        transitionMode='scroll3d'
        pauseOnHover={false}
        autoplayInterval={10000}
        defaultControlsConfig={{
          pagingDotsStyle: {
            padding: '0px 8px',
            fill: 'rgba(7, 6, 6, 0.937)'
          }
        }}
        getControlsContainerStyles={(key) => {
          switch (key) {
            case 'CenterLeft':
              return {
                top: '50%',
                left: '-80px'
              };
            case 'CenterRight':
              return {
                top: '50%',
                right: '-80px'
              };
            case 'BottomCenter':
              return {
                bottom: '12px'
              };
            default:
              return {};
          }
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className='inicio-arrow'>
            <i className='icon-keyboard_arrow_left' onClick={previousSlide}></i>
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div className='inicio-arrow'>
            <i className='icon-keyboard_arrow_right' onClick={nextSlide}></i>
          </div>
        )}
      >
        {categories[category].map((e, i) => (
          <SlideCarousel srcImgSlide={e.imgSrc}
            titleSlide={e.name}
            descriptionSlide={{ ...e.description }} key={`slide-${category}-${i}`} />
        ))}
      </NukaCarousel>
    </CarouselWrapper>
  );
};
