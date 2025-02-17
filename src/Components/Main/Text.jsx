import styled from "styled-components";

const StyledText = styled.p`
  font-size: 23px;
  margin-left: 320px;
  margin-bottom: 3px;
`;

export default function Text() {
  return <StyledText>원하는 조건별로 검색하세요</StyledText>;
}
