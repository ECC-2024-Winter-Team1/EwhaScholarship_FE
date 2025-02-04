import styled from "styled-components";
import Text from "./Text";
import DropDown from "./DropDown";
import GradeInput from "./GradeInput";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 8%;
`;

export default function MainPage() {
  return (
    <>
      <Text />
      <FilterWrapper>
        <DropDown />
        <GradeInput />
      </FilterWrapper>
    </>
  );
}
