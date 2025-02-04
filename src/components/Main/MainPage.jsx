import styled from "styled-components";
import Text from "./Text";
import ToggleText from "./ToggleText";
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

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1%;
`;

export default function MainPage() {
  return (
    <>
      <Text />
      <ToggleWrapper>
        <ToggleText />
        <ToggleSwitch />
      </ToggleWrapper>
      <FilterWrapper>
        <DropDown />
        <GradeInput />
      </FilterWrapper>
    </>
  );
}
