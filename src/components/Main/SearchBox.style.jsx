import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconStyle = styled.i`
  position: absolute;
  padding: 10px 20px;
  font-size: 20px;
  color: #00462a;
`;

export const StyledInput = styled.input`
  width: 900px;
  border-radius: 20px;
  border: 2px solid #00462a;
  font-size: 25px;
  padding: 10px 10px 10px 45px;
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 20px;
  font-size: 25px;
  background-color: #00462a;
  color: white;
  padding: 10px 20px;
`;
