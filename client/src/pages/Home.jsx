import React, { useState } from 'react';
import { AboutUs } from '../components/AboutUs';
import { Carousel } from '../components/Carousel';
import { ContactUs } from '../components/ContactUs';
import { useStateValue } from '../Context';

export const Home = () => {
  const [state, { }] = useStateValue();

  switch (state.home) {
    case 'Carousel':
      return <Carousel />;
    case 'AboutUs':
      return <AboutUs />;
    case 'ContactUs':
      return <ContactUs />;
    // case 'Nibbles':
    //   return <div>Bocaditos</div>;
    // case 'Bakery':
    //   return <div>Panaderia</div>;
    // case 'ContactUs':
    //   return <div>Contáctanos</div>;
    default:
      return <div>No se encontro</div>;
  }
};
