import React from 'react';
import { Option, OptionsWrapper } from './styles';

export const Options = (props) => {
  function clickOption(event) {
    let id = event.target.id;
    props.optionHandler(id);
  }
  return (
    <OptionsWrapper id='navbar_home'>
      <Option onClick={clickOption} id='Products'>
        Productos
      </Option>
      <Option onClick={clickOption} id='AboutUs'>
        Nosotros
      </Option>
      <Option onClick={clickOption} id='Customers'>
        Reseñas
      </Option>
      <Option onClick={clickOption} id='ContactUs'>
        Contacto
      </Option>
    </OptionsWrapper>
  );
};
