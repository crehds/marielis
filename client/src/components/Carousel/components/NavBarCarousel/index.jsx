import React from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

export const NavBarCarousel = () => {
  return (
    <NavBarCarouselWrapper>
      <OptionCarousel>
        <p>Tortas</p>
      </OptionCarousel>
      <OptionCarousel>
        <p>Postres</p>
      </OptionCarousel>
      <OptionCarousel>
        <p>Bocaditos</p>
      </OptionCarousel>
      <OptionCarousel>
        <p>Panaderia</p>
      </OptionCarousel>
    </NavBarCarouselWrapper>
  );
};
