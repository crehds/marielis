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

  // function handleOptionSelected(optionId) {
  //   const optionSelected = document.getElementById(optionId);
  //   if (optionSelected.classList.contains('active')) {
  //     optionSelected.classList.remove('active');
  //   } else {
  //     optionSelected.classList.add('active')
  //   }
  // }

  // useEffect(() => {
  //   handleOptionSelected(state.home);
  // }, [state.home])

  return (
    <NavBarWrapper>
      <Logo />
      <Options optionHandler={optionHandler} />
    </NavBarWrapper>
  );
};
