import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  margin-top: 5px;
  padding: 10px 0px 5px;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 4fr;
  background: rgba(11, 110, 94, 0.719);
  border-top: 3px inset rgba(90, 215, 194);
`;

export const LogoWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  img {
    height: 100%;
    max-width: 100%;
    border-radius: 20%;
  }
`;

export const DetailFooter = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
    text-decoration: none;
    color: gray;
     i {
       font-size: 50px;
     }
    }
  }
  span {
    font-size: 14px;
    color:rgba(250,250,250,0.5);
  }
  
`