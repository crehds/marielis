import styled, { css } from 'styled-components';

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${({ size }) =>
    css`
      max-width: ${size}px;
    `}
  height: calc(100vh - 168px);
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;

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
    opacity: 1;
    transform: scale(1);
    :last-child {
      transform: translate3d(-50%, 0, 0);
    }
  }
  .client:nth-of-type(n) {
    h3 {
      color: rgba(62, 218, 171, 0.8);
    }
  }
  .client:nth-of-type(2n) {
    h3 {
      color: rgba(245, 81, 223, 0.8);
    }
  }
`;
