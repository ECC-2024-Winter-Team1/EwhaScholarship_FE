import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 1300px;
  padding: 10px 10px 10px 50px;
  font-size: 25px;
  border: 2px solid darkgreen;
  border-radius: 20px;
`;

const Icon = styled.i`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
  color: darkgreen;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 25px;
  font-weight: normal;
  cursor: pointer;
  white-space: nowrap;
`;

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(inputValue); //부모 컴포넌트로 전달
  };

  return (
    <SearchContainer>
      <InputWrapper>
        <Icon className="fa-solid fa-magnifying-glass" />
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="궁금한 장학금 이름을 검색하세요"
        />
      </InputWrapper>
      <Button onClick={handleSearch}>검색</Button>
    </SearchContainer>
  );
};

export default SearchBox;
