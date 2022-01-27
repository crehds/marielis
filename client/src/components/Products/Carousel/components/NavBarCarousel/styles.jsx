import styled from 'styled-components';

export const NavBarCarouselWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 8px;
  /* box-shadow: 0 0 3px 1px rgba(2,2,2,.75); */
  /* border-right: 2px outset gray; */
  margin: 5px 10px 8px 1px;
  height: calc(100vh - 175px) !important;
`;

export const OptionCarousel = styled.div`
  font-size: 17px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 3px 1px rgba(2,2,2,.75);
  padding: 0px 2rem;
  font-weight: bold;
  border-radius: 10px;
  transition: .5s;
  :hover {
    background: rgba(69, 247, 214, 0.65);
    color: rgba(240, 51, 127, 0.781);
  }
  
  &&.active {
    background: rgba(69, 247, 214, 0.65);
    color: rgba(240, 51, 127, 0.781);
    border: 3px outset rgba(16, 32, 29, 0.9);
  }
  :active {
      border: 3px solid rgba(45, 95, 86, 0.9);
    }

`;
