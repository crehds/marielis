import React from 'react';
import { Carousel } from '../components/Carousel';
import { useStateValue } from '../Context';
import { Cakes } from '../components/Cakes/Cakes';

export const Home = () => {
  const [state, {}] = useStateValue();
  switch (state.home) {
    case 'Carousel':
      return <Carousel />;
    // case 'Cakes':
    //   return <Cakes />;
    // case 'Desserts':
    //   return <div>Postres</div>;
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
