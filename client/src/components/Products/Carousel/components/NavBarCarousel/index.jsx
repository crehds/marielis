import React from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

import { useOptionActive } from '../../../../../hooks/useOptionActive';

export const NavBarCarousel = ({ setCategory }) => {
  const [optionActive, setOption] = useOptionActive({
    navbar: 'navbar_carousel',
    option: 'cakes'
  });
  function handleClick(event) {
    let id = event.target.id;
    if (!id) return 0;
    if (optionActive.option !== id) {
      setOption((prevState) => ({
        ...prevState,
        option: id
      }));
    }
    setCategory(id);
  }

  return (
    <NavBarCarouselWrapper id='navbar_carousel'>
      <OptionCarousel id='cakes' onClick={handleClick}>
        Tortas
      </OptionCarousel>
      <OptionCarousel id='desserts' onClick={handleClick}>
        Postres
      </OptionCarousel>
      <OptionCarousel id='snacks' onClick={handleClick}>
        Bocaditos
      </OptionCarousel>
    </NavBarCarouselWrapper>
  );
};
