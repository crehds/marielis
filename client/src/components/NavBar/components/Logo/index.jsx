import React from 'react';
import { Div, ImgWrapper, NameLogo, NameLogoWrapper } from './styles';
import logo from '../../../../assets/logo_resize_206_117-removebg-preview.png';

export const Logo = () => {
  return (
    <Div>
      <ImgWrapper className='holder'>
        <div id='photo-holder'></div>
        <div id='preload'></div>
      </ImgWrapper>
      <NameLogoWrapper>
        <NameLogo>Marielis</NameLogo>
      </NameLogoWrapper>
    </Div>
  );
};
