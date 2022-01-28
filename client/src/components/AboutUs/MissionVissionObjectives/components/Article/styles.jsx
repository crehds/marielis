import styled, { keyframes } from 'styled-components';

export const ArticleWrapper = styled.article`
  /* border: 1px solid white; */
  display: grid;
  grid-template-rows: 15em 1.5fr 3fr;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
  margin: 2px;
`;

export const ArticleTitle = styled.div`
  color: rgba(235, 177, 213, 0.904);
  text-align: center;
  margin: 10px 0px 5px;
  padding: 4px 4px;
  font-family: 'Raleway';
  h3 {
    font-size: 2.5rem;
  }
`;
const f = keyframes`
  from {
    clip-path:polygon(
    100% 0,100% 0,100% 0,100% 0,/*1,2,3,4*/
    0 100%,0 100%,0 100%,0 100%);/*5,6,7,8*/
  }
  10%, to {
    clip-path:polygon(
    0 50%,0 0,100% 0,100% 50%,/*1,2,3,4*/
    0 50%,0 100%,100% 100%,100% 50%);/*5,6,7,8*/  
  }
`;
const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ArticleParagraph = styled.p`
  color: white;
  text-align: justify;
  padding: 15px;
  font-family: 'Roboto';
  animation: ${opacity} 0.6s linear 1;
  font-size: 1rem;
`;

export const ArticleImg = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  animation: ${f} 5s 1;
  img {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 5px;
  }
`;
