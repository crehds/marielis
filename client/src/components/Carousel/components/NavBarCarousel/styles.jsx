import styled from 'styled-components';

export const NavBarCarouselWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: 0 0 3px 1px rgba(2,2,2,.75);
  border-right: 2px outset gray;
  margin: 5px 10px 8px 1px;
  height: calc(100vh - 175px) !important;
`;

export const OptionCarousel = styled.div`
  font-size: 18px;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 3px 1px rgba(2,2,2,.5);
  p {
    padding: 0px 35px;
    width: 100%;
  }
`;
