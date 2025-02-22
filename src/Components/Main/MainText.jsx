import { ToggleSwitch } from "./ToggleSwitch";
import { ToggleWrapper, MainTextContainer, StyledText } from "./MainText.style";

export default function MainText() {
  return (
    <MainTextContainer>
      <StyledText>원하는 조건별로 검색하세요</StyledText>
      <ToggleWrapper>
        <StyledText>내 정보로 바로 검색하기</StyledText>
        <ToggleSwitch />
      </ToggleWrapper>
    </MainTextContainer>
  );
}
