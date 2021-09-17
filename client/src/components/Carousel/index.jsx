import React, { useState } from 'react';
import NukaCarousel from 'nuka-carousel';
import mario from '../../assets/mario_pastel.jpg';
import tartaleta from '../../assets/tartaleta_fresa.jpg';
import cristal from '../../assets/torta_cristal.jpg';
import decorada from '../../assets/torta_decorada.jpg';
import universitario from '../../assets/torta_u.jpg';
import { CarouselWrapper } from './styles';

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let posters = [mario, tartaleta, cristal, decorada, universitario];
  let timer;
  return (
    <CarouselWrapper>
      <NukaCarousel
        autoplay
        slideIndex={slideIndex}
        beforeSlide={() => {
          clearTimeout(timer);
        }}
        afterSlide={(slideIndex) => {
          if (slideIndex === posters.length - 1) {
            timer = setTimeout(() => setSlideIndex(0), 5000);
          } else {
            setSlideIndex(slideIndex);
          }
        }}
        slideWidth='600px'
        width='600px'
        height='100%'
        transitionMode='scroll3d'
        pauseOnHover={false}
        defaultControlsConfig={{
          pagingDotsStyle: {
            padding: '0px 8px'
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
        <img src={mario} alt='torta de mario' />
        <img src={tartaleta} alt='tartaleta de fresa' />
        <img src={cristal} alt='torta de cristal' />
        <img src={decorada} alt='torta decorada' />
        <img src={universitario} alt='torta de universitario' />
      </NukaCarousel>
    </CarouselWrapper>
  );
};