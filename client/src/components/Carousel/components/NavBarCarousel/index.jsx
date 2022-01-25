import React from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

export const NavBarCarousel = ({ setCategory }) => {

  function handleClick(event) {
    let id = event.target.id;
    setCategory(id)
  }
  return (
    <NavBarCarouselWrapper>
      <OptionCarousel onClick={handleClick}>
        <p id='cakes'>Tortas</p>
      </OptionCarousel>
      <OptionCarousel onClick={handleClick}>
        <p id='desserts'>Postres</p>
      </OptionCarousel>
      <OptionCarousel onClick={handleClick}>
        <p id='snacks'>Bocaditos</p>
      </OptionCarousel>
    </NavBarCarouselWrapper>
  );
};
