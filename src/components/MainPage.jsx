import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Text from "./Text";
import Toggle from "./Toggle";
import FilterOption from "./FilterOption";

const MainPage = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleSearch = (query) => {
    console.log("검색어:", query); // 검색어를 출력하거나 처리
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <Text />
      <Toggle isOn={isOn} onToggle={handleToggle} />
      <FilterOption />
    </div>
  );
};

export default MainPage;
