import React from 'react';
import { SlideDescriptionWrapper, SlidePrice } from './styles';

export const SlideDescription = ({ description }) => {
  let { details, portions, measure, price } = description;

  return (
    <SlideDescriptionWrapper>
      <p>{details}</p>
      <br />
      <br />
      <p>{portions}</p>
      <br />
      <p>{measure}</p>
      <br />
      <SlidePrice>
        <p>S/. {price}</p>
      </SlidePrice>
    </SlideDescriptionWrapper>
  );
};
