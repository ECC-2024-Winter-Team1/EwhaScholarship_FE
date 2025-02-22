import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconStyle = styled.i`
  position: absolute;
  padding: 10px 10px;
  font-size: 20px;
  color: #00462a;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 5px;
  gap: 40px;
`;

export const Button = styled.button`
  padding: 15px 10px;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  background-color: #00462a;
  width: 120px;
  border: 1px solid #00462a;
  cursor: pointer;

  &:hover {
    background-color: #007245;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 10px 10px 35px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #00462a;
  border: 2px solid #00462a;
  width: 180px;
`;
