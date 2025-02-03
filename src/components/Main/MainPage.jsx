import styled from "styled-components";
import DropDown from "./DropDown";
import GradeInput from "./GradeInput";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function MainPage() {
  return (
    <>
      <FilterWrapper>
        <DropDown />
        <GradeInput />
      </FilterWrapper>
    </>
  );
}
