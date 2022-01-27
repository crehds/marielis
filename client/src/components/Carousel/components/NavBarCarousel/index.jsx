import React from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

import { useOptionActive } from '../../../../hooks/useOptionActive';

export const NavBarCarousel = ({ setCategory }) => {
  const [optionActive, setOption] = useOptionActive({ navbar: 'navbar_carousel', option: 'cakes' })
  function handleClick(event) {
    console.log(event.target);
    let id = event.target.id;
    if (optionActive.option !== id) {
      setOption((prevState) => (
        {
          ...prevState,
          option: id,
        }
      ));
    }
    setCategory(id);
  }

  return (
    <NavBarCarouselWrapper id='navbar_carousel'>
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
