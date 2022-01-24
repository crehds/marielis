import React from 'react';
import { Option, OptionsWrapper } from './styles';

export const Options = (props) => {
  function clickOption(event) {
    let id = event.target.id;
    props.optionHandler(id);
  }
  return (
    <OptionsWrapper>
      <Option onClick={clickOption} id='Cakes'>
        Tortas
      </Option>
      <Option onClick={clickOption} id='Desserts'>
        Postres
      </Option>
      <Option onClick={clickOption} id='Nibbles'>
        Bocaditos
      </Option>
      <Option onClick={clickOption} id='Bakery'>
        Panaderia
      </Option>
      <Option onClick={clickOption} id='ContactUs'>
        Contactános
      </Option>
    </OptionsWrapper>
  );
};
