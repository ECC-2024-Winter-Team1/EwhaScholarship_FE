import React, { useState } from "react";

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(inputValue); //부모 컴포넌트로 전달
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        padding: "0 20px",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            position: "absolute",
            left: "20px",
            top: "50%", // 세로 중앙 맞추기
            transform: "translateY(-50%)", // 세로 중앙 정렬
            fontSize: "25px",
            color: "darkgreen",
          }}
        />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="궁금한 장학금 이름을 검색하세요"
          style={{
            width: "100%",
            maxWidth: "1300px",
            padding: "10px 10px 10px 50px",
            fontSize: "25px",
            border: "2px solid darkgreen",
            borderRadius: "20px",
          }}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "darkgreen",
          color: "white",
          border: "none",
          borderRadius: "20px",
          fontSize: "25px",
          fontWeight: "normal",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        검색
      </button>
    </div>
  );
};

export default SearchBox;
