import React from 'react';
import { ArticleCake, CakesWrapper } from './styles';

export const Cakes = () => {
  return (
    <CakesWrapper>
      <ArticleCake>
        <div>nombre</div>
        <div>descripcion</div>
        <div>imagen</div>
      </ArticleCake>
      <ArticleCake></ArticleCake>
      <ArticleCake></ArticleCake>
    </CakesWrapper>
  );
};
