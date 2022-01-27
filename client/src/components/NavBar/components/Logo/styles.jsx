import styled from 'styled-components';

export const Div = styled.div`
  /* border: 1px solid red; */
  color: white;
  display: grid;
  grid-template-columns: 1fr 4fr;
  /* background: rgb(2, 0, 36); */
  background: linear-gradient(
    180deg,
    rgba(92, 90, 90, 0.3) 0%,
    rgba(31, 30, 30, 0.6) 35%,
    rgba(71, 70, 70, 0.8) 100%
  );
`;

export const NameLogoWrapper = styled.div`
  /* border: 1px solid white; */
  text-align: center;
  margin: auto 0;
  /* display: flex; */
`;

export const NameLogo = styled.h1`
  font-size: 80px;
  /* border: 5px solid gray; */
  /* display: flex; */
  font-family: 'Dancing Script';
  font-weight: bold;
  /* color: white; */
  background: #cf27c4;
  background: -webkit-linear-gradient(to right, #cf27c4 0%, #74cf83 80%);
  background: -moz-linear-gradient(to right, #cf27c4 0%, #74cf83 80%);
  background: linear-gradient(to right, #cf27c4 0%, #74cf83 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ImgWrapper = styled.div`
  /* border: 1px blue solid; */
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`;
