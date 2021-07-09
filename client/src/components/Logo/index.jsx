import React from 'react';
import { Div, ImgWrapper, NameLogo, NameLogoWrapper } from './styles';
import text from '../../assets/marielis_resize_off_650.png';
import logo from '../../assets/logo_resize_206_117.png';

export const Logo = () => {
  return (
    <Div>
      <ImgWrapper>
        <img src={logo} alt='logo de marielis' />
      </ImgWrapper>
      <NameLogoWrapper>
        <NameLogo>Marielis</NameLogo>
      </NameLogoWrapper>
      {/* <ImgWrapper>
        <img src={text} alt='texto de marielis' />
      </ImgWrapper> */}
    </Div>
  );
};
