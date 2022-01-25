import styled from 'styled-components';

export const SlideDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 6px;
  padding-top: 12px;
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
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(226, 37, 37, 1) 0%,
    rgba(211, 49, 49, 1) 82.8%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
