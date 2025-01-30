import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Text from "./Text";
//import Filter from "./Filter";

const MainPage = () => {
  const handleSearch = (query) => {
    console.log("검색어:", query); // 검색어를 출력하거나 처리
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <Text />
      {/* <Filter /> */}
    </div>
  );
};

export default MainPage;
