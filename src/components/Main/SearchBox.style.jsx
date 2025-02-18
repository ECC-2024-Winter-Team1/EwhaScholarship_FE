import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconStyle = styled.i`
  position: absolute;
  padding: 15px 20px;
  font-size: 20px;
  color: #00462a;
`;

export const StyledInput = styled.input`
  min-width: 1150px;
  border-radius: 20px;
  border: 2px solid #00462a;
  font-size: 25px;
  padding: 10px 10px 10px 45px;
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 20px;
  font-size: 20px;
  background-color: #00462a;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #007245;
  }
`;
