import React from 'react';
import { SocialMedia } from './components/SocialMedia';
import { MapAndSocialMediaWrapper, MapAndSocialMediaMap, DetailsMap, MapWrapper } from './styles';

export const MapAndSocialMedia = () => {
  return (
    <MapAndSocialMediaWrapper>
      <MapAndSocialMediaMap>
        <MapWrapper>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3903.027138290128!2d-77.1005898!3d-11.9726229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cff630c52623%3A0x2fa64a25526820a6!2smarielis%20pasteleria!5e0!3m2!1ses!2spe!4v1643136768153!5m2!1ses!2spe" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
            title='mapa de marielis'></iframe>
        </MapWrapper>
        <DetailsMap>
          <a rel='noreferrer' href="https://goo.gl/maps/RmFpfGiSczp3bEWt6" target='_blank' >
            <i className='icon-location_on'></i>
            <p>San Martin de Porres</p>
          </a>
          <div><p>Mz. D lote 16 Las Mercedes III Etapa</p></div>
          <div><p>A 8 minutos del Ovalo Canta Callao</p></div>
          <div><i className='icon-access_time'></i><p>Lunes a Viernes 08:00 a 17:00 hrs</p></div>
        </DetailsMap>
      </MapAndSocialMediaMap>
      <SocialMedia />
    </MapAndSocialMediaWrapper>
  )
}