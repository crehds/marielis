import React from 'react';
import { Links, Requirements, SocialMediaWrapper } from './styles';

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <Requirements>
        <h2>Tener en cuenta</h2>
        <br />
        <p>- Pedidos con una semana de anticipación</p>
        <p>- Contamos con delivery propio(Costo adicional)</p>
      </Requirements>
      <Links>
        <a rel='noreferrer' href="https://www.facebook.com/Marielis-112533103834672" target='_blank' >
          <i className='icon-facebook-square'></i>
          <p>marieli's</p>
        </a>
        <a rel='noreferrer' href="https://www.instagram.com/ma_rielis/" target='_blank' >
          <i className='icon-instagram'></i>
          <p>ma_rielis</p>
        </a>
        <div><i className='icon-whatsapp'></i><p>981680869</p></div>
        <div><i className='icon-envelope'></i><p>marieliscakess@gmail.com</p></div>
      </Links>
    </SocialMediaWrapper>
  )
}