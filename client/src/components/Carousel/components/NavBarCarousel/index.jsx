import React, { useEffect, useState } from 'react';
import { NavBarCarouselWrapper, OptionCarousel } from './styles';

export const NavBarCarousel = ({ setCategory }) => {
  const [option, setOption] = useState('cakes')
  function handleClick(event) {
    let id = event.target.id;
    if (option !== id) {
      handleOptionSelected(option);
      setOption(id);
    }
    setCategory(id);
  }

  function handleOptionSelected(id) {
    const optionSelected = document.getElementById(id);
    if (optionSelected.classList.contains('active')) {
      optionSelected.classList.remove('active');
    } else {
      optionSelected.classList.add('active')
    }
  }

  useEffect(() => {
    handleOptionSelected(option);
  }, [option])

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
