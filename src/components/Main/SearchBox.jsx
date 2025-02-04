import styled from "styled-components";

const InputWrapper = styled.div``;

const StyledInput = styled.input``;

const Button = styled.button``;

export default function SearchBox() {
  return (
    <InputWrapper>
      <StyledInput placeholder="궁금한 장학금 이름을 검색하세요" />
      <Button>검색</Button>
    </InputWrapper>
  );
}
