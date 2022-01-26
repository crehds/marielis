import styled from 'styled-components';

export const SlideCarouselWrapper = styled.div`
  /* border: 3px solid white; */
  display: grid;
  background: rgba(255, 255, 255, 0.949);
  height: 100%;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto calc(100vh - 250px);
  text-align: center;
  border-radius: 10px;
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
