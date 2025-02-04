import styled from "styled-components";
import Text from "./Text";
import { ToggleSwitch } from "./ToggleSwitch";
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
      <ToggleSwitch />
      <FilterWrapper>
        <DropDown />
        <GradeInput />
      </FilterWrapper>
    </>
  );
}
