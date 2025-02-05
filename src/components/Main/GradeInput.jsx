import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const IconStyle = styled.i`
  position: absolute;
  padding: 10px 10px;
  font-size: 20px;
  color: #00462a;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 5px;
  gap: 2%;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 10px;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  background-color: #00462a;
  width: 60px;
`;

const StyledInput = styled.input`
  padding: 10px 10px 10px 35px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #00462a;
  border: 2px solid #00462a;
  width: 150px;
`;

export default function GradeInput() {
  const [gradeInput, setGradeInput] = useState("");

  const handleGradeChange = (event) => {
    setGradeInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const grade = formData.get("grade");
  };

  return (
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
  );
}
