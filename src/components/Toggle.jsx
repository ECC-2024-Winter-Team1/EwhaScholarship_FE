import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  gap: 1%;
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 51px;
  height: 31px;
  background-color: ${(props) => (props.$isOn ? "#00462A" : "gray")};
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.$isOn ? "25px" : "1px")};
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  transiton: left 0.3s ease;
`;

const TextWrapper = styled.p`
  font-size: 20px;
`;

const Toggle = ({ isOn, onToggle }) => {
  return (
    <Container>
      <TextWrapper>내 정보로 바로 검색하기</TextWrapper>
      <ToggleSwitch $isOn={isOn} onClick={onToggle}>
        <ToggleCircle $isOn={isOn} />
      </ToggleSwitch>
    </Container>
  );
};

export default Toggle;
