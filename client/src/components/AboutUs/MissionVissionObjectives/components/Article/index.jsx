import React from 'react';
import {
  ArticleImg,
  ArticleParagraph,
  ArticleTitle,
  ArticleWrapper
} from './styles';

export const Article = ({ title, paragraph, src }) => {
  return (
    <ArticleWrapper>
      <ArticleImg>
        <img src={src} alt='' />
      </ArticleImg>
      <ArticleTitle>
        <h3>{title}</h3>
      </ArticleTitle>
      <ArticleParagraph>{paragraph}</ArticleParagraph>
    </ArticleWrapper>
  );
};
