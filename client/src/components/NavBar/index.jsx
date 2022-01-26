import React, { useEffect } from 'react';
import { Logo } from '../Logo';
import { Options } from '../Options';
import { NavBarWrapper } from './styles';
import { useStateValue } from '../../Context';

export const NavBar = () => {
  const [state, dispatch] = useStateValue();

  function optionHandler(optionId) {
    if (state.home !== optionId) {
      handleOptionSelected(state.home);
    }

    dispatch({
      type: 'SET_HOME',
      payload: optionId
    });
  }

  function handleOptionSelected(optionId) {
    const optionSelected = document.getElementById(optionId);
    if (optionSelected.classList.contains('active')) {
      optionSelected.classList.remove('active');
    } else {
      optionSelected.classList.add('active')
    }
  }

  useEffect(() => {
    handleOptionSelected(state.home);
  }, [state.home])
  return (
    <NavBarWrapper>
      <Logo />
      <Options optionHandler={optionHandler} />
    </NavBarWrapper>
  );
};
