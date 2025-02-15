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

export default function GradeInput({ setFilterOption }) {
  const [formData, setFormData] = useState({
    year: "",
    department: "",
    incomeLevel: "",
    gpa: "",
  });

  const handleGradeChange = (event) => {
    setFormData({ ...formData, gpa: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterOption({ ...formData });
  };

  const handleOptionChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FilterWrapper>
      <DropDown setOption={handleOptionChange} />
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <InputWrapper>
            <IconStyle>
              <FontAwesomeIcon icon={faStar} />
            </IconStyle>
            <StyledInput
              name="gpa"
              type="text"
              placeholder="학점 입력"
              value={formData.gpa}
              onChange={handleGradeChange}
            />
          </InputWrapper>
          <Button type="submit">검색</Button>
        </Wrapper>
      </form>
    </FilterWrapper>
  );
}
