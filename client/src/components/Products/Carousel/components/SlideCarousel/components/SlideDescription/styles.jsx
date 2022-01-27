import styled from 'styled-components';

export const SlideDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 6px;
  padding-top: 12px;
  font-family: 'Roboto';
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: rgba(235,235,235,.85);
  > p:nth-child(1) {
    text-align: justify;
  }
`;

export const SlidePrice = styled.div`
  font-size: 18px;
  border: 2px solid transparent;
  padding: 4px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgb(245, 19, 19) 0%,
    rgb(238, 45, 45) 82.8%
  ); */
  /* background-image: rgba(245,19,19,.9); */
  /* background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
  color: rgba(243, 2, 2, 0.898);
`;
