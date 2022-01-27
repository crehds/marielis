import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  margin-top: 3px;
  max-height: 30px;
  cursor: pointer;
`;

export const Option = styled.div`
  border-top: 1px inset white;
  border-left: 1px inset white;
  border-right: 1px outset white;
  border-bottom: 1px outset white;
  margin: 0 1px;
  padding: 2px;
  border-radius: 3px;
  text-align: center;
  width: 100%;
  color: white;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  transition: .8s;
  :hover {
    border: none;
    background-image: linear-gradient( 110.6deg,  rgba(243, 134, 170, 0.698) 7%, rgba(253,255,239,1) 47.7%, rgba(128, 221, 205, 0.698) 100.6% );
    color: rgba(18,18,18,.85);
  }
  &&.active{
    border:none;
    background-image: linear-gradient( 110.6deg,  rgba(243, 134, 170, 0.698) 7%, rgba(253,255,239,1) 47.7%, rgba(128, 221, 205, 0.698) 100.6% );
    color: rgba(18,18,18,.85);
  }
`;
