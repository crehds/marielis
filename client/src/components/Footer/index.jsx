import React from 'react';
import { ArticleInfo } from './ArticleInfo';
import { FooterWrapper, LogoWrapper } from './styles';
import logo from '../../assets/logo_resize_155.png';
export const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo de marielis' />
      </LogoWrapper>
      <ArticleInfo
        title={'Encuentrános'}
        content={[
          'San Martin de Porres',
          'Mz. D lote 16 Las Mercedes III etapa',
          'Lunes a Viernes 08:00 a 17:00 hrs'
        ]}
        icons={['location_on', '', 'access_time']}
        links={['https://goo.gl/maps/RmFpfGiSczp3bEWt6', '', '']}
      />
      <ArticleInfo
        title={'Contáctanos'}
        icons={['facebook-square', 'instagram', 'whatsapp', 'envelope']}
        links={[
          'https://www.facebook.com/Marielis-112533103834672',
          'https://www.instagram.com/ma_rielis/',
          ''
        ]}
        content={[
          "marieli's",
          'ma_rielis',
          '981680869',
          'marieliscakess@gmail.com'
        ]}
      />
    </FooterWrapper>
  );
};
