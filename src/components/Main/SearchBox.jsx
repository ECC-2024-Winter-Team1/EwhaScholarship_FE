import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 900px;
  border-radius: 20px;
  border: 2px solid #00462a;
  font-size: 25px;
  padding: 10px 10px 10px 35px;
`;

const Button = styled.button`
  width: 80px;
  border-radius: 20px;
  font-size: 25px;
  background-color: #00462a;
  color: white;
  padding: 10px 10px;
`;

export default function SearchBox() {
  return (
    <InputWrapper>
      <StyledInput placeholder="궁금한 장학금 이름을 검색하세요" />
      <Button>검색</Button>
    </InputWrapper>
  );
}
