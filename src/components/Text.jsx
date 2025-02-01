import React from "react";
import styled from "styled-components";

const TextWrapper = styled.p`
  font-size: 25px;
  font-weight: 549;
  color: black;
  text-align: left;
  position: relative;
  left: 15%;
`;

const Text = () => {
  return <TextWrapper>원하는 조건별로 검색하세요</TextWrapper>;
};

export default Text;
