import React from 'react';
import { Article, ContentArticle, Info, Title } from './styles';

export const ArticleInfo = (props) => {
  return (
    <Article>
      <Title>{props.title}</Title>
      <ContentArticle>
        {props.content.map((e, i) => (
          <Info>
            {props.icons.length !== 0 && (
              <i className={`icon-${props.icons[i]}`}></i>
            )}
            <p>{e}</p>
          </Info>
        ))}
      </ContentArticle>
    </Article>
  );
};
