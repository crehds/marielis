import React, { useState } from 'react';
import NukaCarousel from 'nuka-carousel';
import mario from '../../assets/cakes/mario_pastel.jpg';
import tartaleta from '../../assets/tartaleta_fresa.jpg';
import cristal from '../../assets/torta_cristal.jpg';
import decorada from '../../assets/torta_decorada.jpg';
import universitario from '../../assets/torta_u.jpg';
import { CarouselWrapper } from './styles';
import { NavBarCarousel } from './components/NavBarCarousel';
import { SlideCarousel } from './components/SlideCarousel';

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let posters = [mario, tartaleta, cristal, decorada, universitario];
  let timer;
  return (
    <CarouselWrapper>
      <NavBarCarousel />

      <NukaCarousel
        autoplay
        slideIndex={slideIndex}
        beforeSlide={() => {
          clearTimeout(timer);
        }}
        afterSlide={(slideIndex) => {
          if (slideIndex === posters.length - 1) {
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
        <SlideCarousel
          srcImgSlide={mario}
          titleSlide={'torta de mario'}
          descriptionSlide={{
            details:
              'Suave bizcochuelo de vainilla relleno de manjar, crema y fresas coronado con butterscotch, crema y pecanas.',
            portions: '20 a 30 porciones',
            measure: '28 cm diámetro',
            price: '50.00'
          }}
        />
        <SlideCarousel
          srcImgSlide={tartaleta}
          titleSlide={'tartaleta de fresa'}
          descriptionSlide={{
            details:
              'Suave bizcochuelo de vainilla relleno de manjar, crema y fresas coronado con butterscotch, crema y pecanas.',
            portions: '20 a 30 porciones',
            measure: '28 cm diámetro',
            price: '50.00'
          }}
        />
        <SlideCarousel
          srcImgSlide={cristal}
          titleSlide={'torta con diseño de cristal'}
          descriptionSlide={{
            details:
              'Suave bizcochuelo de chocolate relleno de crema chantilly, fresas y coldfil de fresa. Bañado en fudge de chocolate y decorado con rulos de chocolate, fresas y chantilly.',
            portions: '20 a 30 porciones',
            measure: '28 cm diámetro',
            price: '60.00'
          }}
        />
        <SlideCarousel
          srcImgSlide={decorada}
          titleSlide={'torta decorada'}
          descriptionSlide={{
            details:
              'Suave bizcochuelo de chocolate relleno y bañado con fudge 100% cacao.',
            portions: '20 a 30 porciones',
            measure: '28 cm diámetro',
            price: '60.00'
          }}
        />
        <SlideCarousel
          srcImgSlide={universitario}
          titleSlide={'torta con diseño de universitario'}
          descriptionSlide={{
            details:
              'Bizcocho con vainilla fresas, yogurt natural decorado con chantilly y fresas.',
            portions: '10 a 15 porciones',
            measure: '24 cm diámetro',
            price: '40.00'
          }}
        />
      </NukaCarousel>
    </CarouselWrapper>
  );
};
