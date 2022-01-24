import styled from 'styled-components';

export const NavBarCarouselWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5px 10px 8px 1px;
  height: calc(100vh - 175px) !important;
`;

export const OptionCarousel = styled.div`
  border: 1px solid blue;
  font-size: 18px;
  color: white;
  text-align: center;
  p {
    padding: 0px 35px;
  }
`;
