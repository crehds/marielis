import React from 'react';
import { Logo } from '../Logo';
import { Options } from '../Options';
import { NavBarWrapper } from './styles';

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <Logo />
      <Options />
    </NavBarWrapper>
  );
};
