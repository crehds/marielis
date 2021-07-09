import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  margin-top: 3px;
  max-height: 30px;
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
`;
