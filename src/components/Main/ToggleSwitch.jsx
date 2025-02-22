import { useState } from "react";
import { ToggleWrapper, ToggleButton } from "./ToggleSwitch.style";

export const ToggleSwitch = ({ onToggleChange }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => {
      const newState = !prev;
      onToggleChange(newState);
      return newState;
    });
  };

  return (
    <ToggleWrapper isToggleOn={isOn} onClick={handleToggle}>
      <ToggleButton isToggleOn={isOn} />
    </ToggleWrapper>
  );
};
