import React from 'react';
import { Option, OptionsWrapper } from './styles';

export const Options = (props) => {
  function clickOption(event) {
    let id = event.target.id;
    props.optionHandler(id);
  }
  return (
    <OptionsWrapper>
      <Option onClick={clickOption} id='Carousel'>
        Productos
      </Option>
      <Option onClick={clickOption} id='AboutUs'>
        Nosotros
      </Option>
      <Option onClick={clickOption} id='ContactUs'>
        Contactános
      </Option>
    </OptionsWrapper>
  );
};
