import React, { useEffect } from 'react';
import { Logo } from '../Logo';
import { Options } from '../Options';
import { NavBarWrapper } from './styles';
import { useStateValue } from '../../Context';
import { useOptionActive } from '../../hooks/useOptionActive';

export const NavBar = () => {
  const [state, dispatch] = useStateValue();
  const [option, setOption] = useOptionActive({ navbar: 'navbar_home', option: state.home })
  function optionHandler(optionId) {
    if (state.home !== optionId) {
      setOption((prevState) => (
        {
          ...prevState,
          option: optionId
        }
      ))
    }

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
