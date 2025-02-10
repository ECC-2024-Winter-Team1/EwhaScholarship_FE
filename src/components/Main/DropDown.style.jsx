import styled from "styled-components";

export const DropDownWrapper = styled.div`
  position: relative;
`;

export const IconStyle = styled.i`
  position: absolute;
  padding: 10px 10px;
  font-size: 20px;
  color: #00462a;
`;

export const StyledSelect = styled.select`
  border-radius: 20px;
  border: 2px solid #00462a;
  color: #00462a;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 10px 10px 35px;
  width: 250px;
`;

export const StyledOption = styled.option`
  &:hover {
    background-color: #00462a;
    color: white;
  }
`;
