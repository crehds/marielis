import React from 'react';
import { SlideDescription } from './components/SlideDescription';
import { SlideTitle } from './components/SlideTitle';
import { SlideCarouselWrapper, SlideImg } from './styles';

export const SlideCarousel = ({
  srcImgSlide,
  titleSlide,
  descriptionSlide
}) => {
  let title = titleSlide.toUpperCase();
  return (
    <SlideCarouselWrapper>
      <SlideTitle title={title} />
      <SlideDescription description={descriptionSlide} />
      <SlideImg>
        <img src={srcImgSlide} alt='torta de mario' />
      </SlideImg>
    </SlideCarouselWrapper>
  );
};
