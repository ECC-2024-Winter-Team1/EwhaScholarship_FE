import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  FilterWrapper,
  InputWrapper,
  IconStyle,
  Wrapper,
  Button,
  StyledInput,
} from "./GradeInput.style";
import DropDown from "./DropDown";

export default function GradeInput() {
  const [gradeInput, setGradeInput] = useState("");
  const [option, setOption] = useState(null);

  const handleGradeChange = (event) => {
    setGradeInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const grade = formData.get("grade");
  };

  const handleOption = (option) => {
    setOption(option);
  };

  return (
    <FilterWrapper>
      <DropDown setOption={setOption} />
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <InputWrapper>
            <IconStyle>
              <FontAwesomeIcon icon={faStar} />
            </IconStyle>
            <StyledInput
              name="grade"
              type="text"
              placeholder="학점 입력"
              value={gradeInput}
              onChange={handleGradeChange}
            />
          </InputWrapper>
          <Button type="submit">검색</Button>
        </Wrapper>
      </form>
    </FilterWrapper>
  );
}
