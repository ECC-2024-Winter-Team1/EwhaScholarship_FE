import { useState } from "react";
import { ToggleWrapper, ToggleButton } from "./ToggleSwitch.style";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleWrapper isToggleOn={isOn} onClick={handleToggle}>
      <ToggleButton isToggleOn={isOn} />
    </ToggleWrapper>
  );
};
