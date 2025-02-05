import Text from "./Text";
import ToggleText from "./ToggleText";
import { ToggleSwitch } from "./ToggleSwitch";
import DropDown from "./DropDown";
import GradeInput from "./GradeInput";
import { FilterWrapper, ToggleWrapper } from "./MainPage.style";

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
