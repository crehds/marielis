import styled, { css } from 'styled-components';

export const ReviewsWrapper = styled.div`
  /* white-space: nowrap; */
  display: flex;
  flex-wrap: nowrap;
  /* display: inline-block; */
  ${({ size }) =>
    css`
      max-width: ${size}px;
    `}
  height: calc(100vh - 168px);
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  transform-origin: center left;
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
  &::-webkit-scrollbar:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar:hover:active {
    background: #999;
  }
  :hover .client {
    opacity: 0.3;
    transform: scale(0.9);
  }
  :hover .client:hover {
    transform: scaleX(0.8);
    opacity: 1;
    position: relative;
  }
`;

export const Review = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  border: 1px solid green;
  margin: 8px 10px;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.9);
  transition: 450ms;
  border-radius: 8px;
  :hover ~ .client {
    transform: scale(0.9) translate3d(1px, 0, 0);
  }
  ${({ size }) =>
    css`
      min-width: ${size / 2.5}px;
      min-height: ${size / 4}px;
    `}

  :hover {
    ${({ size }) =>
      css`
        min-width: ${size / 2.5 + 250}px;
        padding-right: 30%;
      `}
    .clientContent {
      right: -80%;
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
  div {
    transition: 0.8s;
    position: absolute;
    opacity: 0.2;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;
