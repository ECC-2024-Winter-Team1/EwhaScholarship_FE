import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

// const IconStyle = styled.i`
//   position: absolute;
//   left: 10px;
// `;

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
  border-radius: 10px;
  font-size: 15px;
  color: white;
  background-color: #00462a;
  width: 60px;
`;

const StyledInput = styled.input`
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid #00462a;
  width: 150px;
`;

export default function GradeInput() {
  function search(formData) {
    const gradeInput = formData.get("gradeInput");
    alert(`You searched for '${gradeInput}'`);
  }
  return (
    <form action={search}>
      <Wrapper>
        <InputWrapper>
          {/* <FontAwesomeIcon icon={faStar} /> */}
          <StyledInput type="text" placeholder="학점 입력" />
        </InputWrapper>
        <Button>검색</Button>
      </Wrapper>
    </form>
  );
}
