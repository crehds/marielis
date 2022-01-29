import styled from 'styled-components';

export const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.6);
`;

export const Requirements = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  border: 3px outset rgba(243, 115, 115, 0.8);
  border-bottom: 3px inset rgba(243, 115, 115, 0.8);
  border-right: 3px inset rgba(243, 115, 115, 0.8);
  border-radius: 6px;
  margin: 1.5rem;
  h2 {
    text-align: center;
    color: rgba(241, 103, 103, 0.9);
    font-size: 1.8rem;
  }
  p {
    padding: 0px 5rem;
    color: rgba(243, 115, 115, 0.8);
    font-size: 1.1rem;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 20px;
  font-size: 25px;
  color: rgba(210, 210, 210, 0.7);
  a {
    display: grid;
    grid-template-columns: 1fr 4fr;
    text-decoration: none;
    /* color:white; */
    color: rgba(210, 210, 210, 0.7);
    text-align: center;
    :hover {
      color: rgba(74, 193, 214, 0.95);
    }
  }
  div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    text-align: center;
  }
  i {
    font-size: 35px;
  }
`;
