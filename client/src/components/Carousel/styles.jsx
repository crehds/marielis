import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  padding-top: 3px;
  height: calc(100vh - 166px);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 100px;
  /* border: 1px solid brown; */
  justify-items: cetner;
  /* border: 1px solid red; */
  justify-items: center;
  .slider-list {
    /* border: 1px solid red; */
    height: calc(100vh - 185px) !important;
    .slider-slide {
      /* border: 1px solid blue; */
      height: 100% !important;
      /* width: 100% !important; */
      img {
        /* max-width: 100% !important;
        height: 100% !important; */
      }
    }
  }
  .paging-dot {
    width: 12px;
    height: 12px;
  }

  .paging-dot > circle {
    r: 4px;
    cx: 8px;
    cy: 8px;
  }
  .inicio-arrow {
    background-image: radial-gradient(
      circle farthest-corner at 12.3% 19.3%,
      rgba(85, 88, 218, 1) 0%,
      rgba(95, 209, 249, 1) 100.2%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    i {
      font-size: 80px;
      cursor: pointer;
    }
  }
`;
