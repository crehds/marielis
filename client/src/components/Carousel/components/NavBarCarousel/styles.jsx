import styled from 'styled-components';

export const NavBarCarouselWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 5px;
  box-shadow: 0 0 3px 1px rgba(2,2,2,.75);
  border-right: 2px outset gray;
  margin: 5px 10px 8px 1px;
  height: calc(100vh - 175px) !important;
`;

export const OptionCarousel = styled.div`
  font-size: 17px;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 3px 1px rgba(2,2,2,.5);
  :hover {
    background: rgba(99,233,208,.6);
    > p {
      color: rgba(199, 38, 102, 0.781);
    }
  }
  p {
    padding: 0px 35px;
    width: 100%;
    font-weight: bold;
  }
  :active {
      border: 2px solid rgba(120, 245, 222, 0.9);
    }
  &&.active {
    background: rgba(99,233,208,.6);
    > p {
      color: rgba(199, 38, 102, 0.781);
    }
  }
`;
