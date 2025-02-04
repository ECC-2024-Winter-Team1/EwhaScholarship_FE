import styled from "styled-components";
import DropDown from "./DropDown";
import GradeInput from "./GradeInput";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 11%;
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
