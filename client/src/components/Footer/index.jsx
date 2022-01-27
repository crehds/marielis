import React from 'react';
import { DetailFooter, FooterWrapper, LogoWrapper } from './styles';
import logo from '../../assets/logo_resize_155.png';
export const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo de marielis' />
      </LogoWrapper>
      <DetailFooter>
        <div>
          <a rel='noreferrer' href="https://www.facebook.com/Marielis-112533103834672" target='_blank'><i className='icon-facebook-square'></i></a>
          <a rel='noreferrer' href="https://www.instagram.com/ma_rielis/" target='_blank'><i className='icon-instagram'></i></a>
        </div>
        <span><p>Diseño y programación: Carlos Rodríguez</p></span>
      </DetailFooter>
    </FooterWrapper>
  );
};
