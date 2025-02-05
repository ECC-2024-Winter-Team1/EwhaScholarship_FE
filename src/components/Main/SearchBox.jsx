import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  InputWrapper,
  IconStyle,
  StyledInput,
  Button,
} from "./SearchBox.style";

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const search = formData.get("search");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <IconStyle>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconStyle>
        <StyledInput
          name="search"
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="궁금한 장학금 이름을 검색하세요"
        />
      </InputWrapper>
      <Button type="submit">검색</Button>
    </Form>
  );
}
