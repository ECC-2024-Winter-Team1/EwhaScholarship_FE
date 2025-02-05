import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  InputWrapper,
  IconStyle,
  StyledInput,
  Button,
} from "./SearchBox.style";

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
