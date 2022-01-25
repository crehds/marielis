import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  height: calc(100vh - 173px);
`

export const ContactUsMap = styled.div`
  display:grid ;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.6);
`

export const MapWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 100%;
  /* margin: 20px; */
  iframe {
    left: 0;
    top:0;
    /* padding: 20px; */
    /* border: 5px solid blue; */
    border-radius: 8px;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

export const DetailsMap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 9rem 0px;
  a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color:white;
    width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    width: 100%;
  }
  i {
    font-size: 35px;
  }
`

export const ContactUsSocialMedia = styled.div`
  display: grid;
  border: 1px solid red;
`