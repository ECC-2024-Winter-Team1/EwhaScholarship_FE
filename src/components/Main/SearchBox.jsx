import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const IconStyle = styled.i`
  position: absolute;
  padding: 10px 20px;
  font-size: 20px;
  color: #00462a;
`;

const StyledInput = styled.input`
  width: 900px;
  border-radius: 20px;
  border: 2px solid #00462a;
  font-size: 25px;
  padding: 10px 10px 10px 45px;
`;

const Button = styled.button`
  width: 100px;
  border-radius: 20px;
  font-size: 25px;
  background-color: #00462a;
  color: white;
  padding: 10px 20px;
`;

export default function SearchBox() {
  return (
    <Wrapper>
      <InputWrapper>
        <IconStyle>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconStyle>
        <StyledInput placeholder="궁금한 장학금 이름을 검색하세요" />
      </InputWrapper>
      <Button>검색</Button>
    </Wrapper>
  );
}
