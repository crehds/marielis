import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  margin-top: 5px;
  padding: 10px 0px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
