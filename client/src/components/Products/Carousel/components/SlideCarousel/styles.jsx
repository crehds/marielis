import styled from 'styled-components';

export const SlideCarouselWrapper = styled.div`
  /* border: 3px solid white; */
  display: grid;
  background: rgba(78, 163, 184, 0.9);
  border: 2px solid green;
  height: 100%;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto calc(100vh - 250px);
  text-align: center;
  border-radius: 10px;
  border-top: 2px inset rgba(57, 174, 190, 0.9);
  border-left: 2px inset rgba(57, 174, 190, 0.9);
  border-right: 2px outset rgba(57, 174, 190, 0.9);
  border-bottom: 2px outset rgba(57, 174, 190, 0.9);
`;

export const SlideTitle = styled.div`
  /* border: 1px solid yellow; */
  grid-column: 1 / 3;
  font-size: 2rem;
`;

export const SlideImg = styled.div`
  /* border: 1px solid green; */
  /* max-width: 600px !important;
  height: 300px !important; */
  display: flex;
  width: 100%;
  /* max-height: 100%; */
  padding: 20px;
  img {
    width: 100%;
    /* max-height: 100%; */
    /* max-height: 100%; */
    /* border: 3px solid green; */
  }
`;
