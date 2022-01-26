import React, { useEffect, useState } from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

export const NavBarCarousel = ({ setCategory }) => {
  const [option, setOption] = useState('cakes')
  function handleClick(event) {
    let id = event.target.id;
    handleOptionSelected(id);
    setCategory(id)
  }

  function handleOptionSelected(id) {
    if (option === id) {
      return 0
    }
    const optionSelected = document.getElementById(option);
    const newOptionSelected = document.getElementById(id);

    if (optionSelected.classList.contains('active')) {
      optionSelected.classList.remove('active');
    }

    if (!(newOptionSelected.classList.contains('active'))) {
      newOptionSelected.classList.add('active')
    }

    setOption(id)
  }

  useEffect(() => {
    handleOptionSelected(option);
  }, [])

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
