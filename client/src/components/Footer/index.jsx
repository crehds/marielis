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
        icons={[]}
      />
      <ArticleInfo
        title={'Contáctanos'}
        icons={['whatsapp', 'facebook-square', 'instagram', 'envelope']}
        content={[
          '981680869',
          "marieli's",
          'ma_rielis',
          'marieliscakess@gmail.com'
        ]}
      />
    </FooterWrapper>
  );
};
