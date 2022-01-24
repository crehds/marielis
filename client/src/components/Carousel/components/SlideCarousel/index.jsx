import React from 'react';
import {
  SlideCarouselWrapper,
  SlideDescription,
  SlideImg,
  SlideTitle
} from './styles';

export const SlideCarousel = ({ srcImgSlide }) => {
  return (
    <SlideCarouselWrapper>
      <SlideTitle>
        <p>Este es el titulo</p>
      </SlideTitle>
      <SlideDescription>
        <p>Esta es una descripcion de los ingredientes de preparacio;ón</p>
      </SlideDescription>
      <SlideImg>
        <img src={srcImgSlide} alt='torta de mario' />
      </SlideImg>
    </SlideCarouselWrapper>
  );
};
