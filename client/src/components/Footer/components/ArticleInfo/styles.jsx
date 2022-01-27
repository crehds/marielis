import styled from 'styled-components';

export const Article = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: 'Roboto';
`;

export const Title = styled.h3`
  color: white;
`;

export const ContentArticle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const Info = styled.a`
  display: flex;
  margin: 4px 0;
  align-items: center;
  text-decoration: none;
  :hover {
    > i {
      color: white;
    }
    > p {
      color: white;
    }
  }
  i {
    font-size: 20px;
    color: gray;
    padding-right: 10px;
  }
  p {
    font-size: 15px;
    color: rgba(173, 199, 157, 0.815);
  }
`;
