import React from 'react';
import { Logo } from '../Logo';
import { Options } from '../Options';
import { NavBarWrapper } from './styles';
import { useStateValue } from '../../Context';

export const NavBar = () => {
  const [state, dispatch] = useStateValue();

  function optionHandler(optionId) {
    dispatch({
      type: 'SET_HOME',
      payload: optionId
    });
  }

  return (
    <NavBarWrapper>
      <Logo />
      <Options optionHandler={optionHandler} />
    </NavBarWrapper>
  );
};
