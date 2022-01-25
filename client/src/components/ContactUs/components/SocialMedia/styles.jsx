import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.6);
`

export const Requirements = styled.div`
  display:flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  h2 {
    text-align: center;
  }
  p {
    padding: 0px 5rem;
  }
`

export const Links = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 20px;
  font-size: 25px;
  color:white;
  a {
    display: grid;
    grid-template-columns: 1fr 4fr;
    text-decoration: none;
    color:white;
    text-align: center;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    text-align: center;
  }
  i {
    font-size: 35px;
  }
`