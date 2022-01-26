import React from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

export const NavBarCarousel = ({ setCategory }) => {

  function handleClick(event) {
    let id = event.target.id;
    setCategory(id)
  }
  return (
    <NavBarCarouselWrapper>
      <OptionCarousel id='cakes' onClick={handleClick}>
        <p >Tortas</p>
      </OptionCarousel>
      <OptionCarousel id='desserts' onClick={handleClick}>
        <p>Postres</p>
      </OptionCarousel>
      <OptionCarousel id='snacks' onClick={handleClick}>
        <p >Bocaditos</p>
      </OptionCarousel>
    </NavBarCarouselWrapper>
  );
};
