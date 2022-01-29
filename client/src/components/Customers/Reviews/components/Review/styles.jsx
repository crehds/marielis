import styled, { css } from 'styled-components';

export const ReviewWrapper = styled.div`
  margin: 8px 10px;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.9);
  transition: 450ms;
  border-radius: 8px;
  transform-origin: center left;
  :hover ~ .client {
    transform: scale(0.9) translate3d(1px, 0, 0);
  }
  ${({ size }) =>
    css`
      min-width: ${size / 3.5}px;
      min-height: ${size / 4}px;
    `}

  :hover {
    ${({ size }) =>
      css`
        min-width: ${size / 2.5 + 250}px;
        padding-right: 30%;
      `}
    .clientContent {
      right: -110%;
      opacity: 1;
    }
  }
  padding: 1.8rem 2.8rem;
`;

export const ReviewContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ReviewDetails = styled.div`
  transition: 0.8s;
  position: absolute;
  opacity: 0.2;
  display: grid;
  grid-template-rows: 1fr 0.5fr 2fr;
  grid-row-gap: 5rem;
  ${({ size }) =>
    css`
      min-height: ${size / 3.2}px;
    `}
  text-align: center;
  padding: 10% 5%;
  top: 0;
  right: 0;
  z-index: -1;
  h3 {
    font-size: 1.8rem;
    font-family: 'Raleway';
  }
  p {
    font-family: 'Roboto';
    font-size: 1.2rem;
    :nth-of-type(1) {
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      /* background-image: linear-gradient(
        110.6deg,
        rgba(243, 134, 170, 0.698) 7%,
        rgba(253, 255, 239, 1) 47.7%,
        rgba(128, 221, 205, 0.698) 100.6%
      ); */
      background-image: radial-gradient(
        circle 755px at 10.1% 95.3%,
        rgba(242, 188, 141, 1) 0%,
        rgba(242, 159, 141, 1) 100.2%
      );
      font-size: 1.5rem;
      font-weight: bold;
      font-style: italic;
    }
    :nth-of-type(2) {
      font-size: 1.2rem;
      color: white;
    }
  }
`;
