import React, { useState } from 'react';
import { Carousel } from '../components/Carousel';
import { useStateValue } from '../Context';
import { Cakes } from '../components/Cakes/Cakes';

import categories from '../json/body.json';

export const Home = () => {
  const [state, { }] = useStateValue();
  const [category, setCategory] = useState('cakes')
  switch (state.home) {
    case 'Carousel':
      return <Carousel category={categories[category]} setCategory={setCategory} />;
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
