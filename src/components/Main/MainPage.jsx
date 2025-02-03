import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Text from "./Text";
import Toggle from "./Toggle";

const MainPage = () => {
  const [isOn, setIsOn] = useState(false);
  const [filters, setFilters] = useState({
    year: null,
    college: null,
    income: null,
    grade: "",
  });

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleSearch = (query) => {
    console.log("검색어:", query); // 검색어를 출력하거나 처리
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <Text />
      <Toggle isOn={isOn} onToggle={handleToggle} />
      {/* <FilterOption filters={filters} onFilterChange={handleFilterChange} /> */}
    </div>
  );
};

export default MainPage;
