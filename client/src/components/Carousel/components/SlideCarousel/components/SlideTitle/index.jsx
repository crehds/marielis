import React from 'react';
import { SlideTitleWrapper } from './styles';

export const SlideTitle = ({ title }) => {
  return (
    <SlideTitleWrapper>
      <p>{title}</p>
    </SlideTitleWrapper>
  );
};
