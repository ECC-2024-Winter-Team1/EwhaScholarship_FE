import { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div``;

const ToggleButton = styled.div``;

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
