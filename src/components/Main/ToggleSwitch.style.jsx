import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: relative;
  width: 57px;
  height: 30px;
  background-color: ${(props) => (props.isToggleOn ? "#00462a" : "gray")};
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isToggleOn ? "30px" : "3px")};
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
`;
