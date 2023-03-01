import styled from 'styled-components';

export const StyledInputArea = styled.div`
  text-align: left;
  max-width: 50%;
  margin: 0px auto;
  background-color: azure;
  border: 1px solid black;
  border-radius: 5%;
`;

export const StyledInput = styled.input`
  display: block;
  margin: auto auto 20px 10px;
  max-width: 80%;
`;

export const StyledLabel = styled.label`
  margin: 10px auto 5px 10px;
  display: block;
`;

export const StyledAddButton = styled.button`
  margin: auto auto 10px 10px;
  &:hover {
    cursor: pointer;
  }
`;
