import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.5%;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledSingleValue = styled.div`
  color: #00462a;
  font-weight: 550;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  color: #00462a;
`;

const CustomStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#00462A",
    "&:hover": {
      color: "#00462A",
    },
  }),
  control: (styles) => ({
    ...styles,
    height: "40px",
    borderColor: "#00462A",
    borderRadius: "15px",
    borderWidth: "2px",
    display: "flex",
    alignItems: "center",
    width: "250px",
    "&:hover": {
      borderColor: "#00462A",
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    height: "40px",
    display: "flex",
    alignItems: "center",
  }),
  input: (styles) => ({
    ...styles,
    caretColor: "transparent",
  }),
  placeholder: (styles) => ({
    ...styles,
    display: "flex",
    alignItems: "center",
    color: "#00462A",
    fontWeight: 550,
    gap: "10px",
  }),
  singleValue: (styles) => ({
    ...styles,
    display: "flex",
    alignItems: "center",
    height: "100%",
  }),
  indicatorSeparator: () => ({
    //구분선 없애기
    display: "none",
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "white",
    color: "gray",
    "&:hover": {
      backgroundColor: "#00462A",
      color: "white",
    },
  }),
  menu: (styles) => ({
    ...styles, // 기존 스타일을 유지하면서 추가/변경
    borderRadius: "10px", // 드롭다운 메뉴의 둥근 정도
    border: "1px", // 메뉴 테두리
  }),
};

const Input = styled.input`
  padding: 10px 10px 10px 35px;
  border: 2px solid #00462a;
  border-radius: 15px;
  color: #00462a;
  font-size: 16px;
  font-weight: 550;
  width: 200px;

  &:focus {
    border-color: #00462a;
    outline: none;
  }

  &::placeholder {
    color: #00462a;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterOption = ({ filters, onFilterChange }) => {
  const YearSingleValue = ({ data }) => (
    <>
      <StyledSingleValue>
        <FontAwesomeIcon icon={faCalendar} />
        {data.label}
      </StyledSingleValue>
    </>
  );

  const CollegeSingleValue = ({ data }) => (
    <>
      <StyledSingleValue>
        <FontAwesomeIcon icon={faBook} />
        {data.label}
      </StyledSingleValue>
    </>
  );

  const IncomeSingleValue = ({ data }) => (
    <>
      <StyledSingleValue>
        <FontAwesomeIcon icon={faHouse} />
        {data.label}
      </StyledSingleValue>
    </>
  );

  const handleYearChange = (selectedOption) => {
    onFilterChange({ ...filters, year: selectedOption });
  };

  const handleCollegeChange = (selectedOption) => {
    onFilterChange({ ...filters, college: selectedOption });
  };

  const handleIncomeChange = (selectedOption) => {
    onFilterChange({ ...filters, income: selectedOption });
  };

  const handleGradeChange = (event) => {
    onFilterChange({ ...filters, grade: event.target.value });
  };

  const options1 = [
    { value: "freshman", label: "1학년" },
    { value: "sophomore", label: "2학년" },
    { value: "junior", label: "3학년" },
    { value: "senior", label: "4학년" },
  ];

  const options2 = [
    { value: "humanities", label: "인문과학대학" },
    { value: "social", label: "사회과학대학" },
    { value: "natural", label: "자연과학대학" },
    { value: "engineering", label: "공과대학" },
    { value: "music", label: "음악대학" },
    { value: "arts", label: "조형예술대학" },
    { value: "education", label: "사범대학" },
    { value: "business", label: "경영대학" },
    { value: "convergence", label: "신산업융합대학" },
    { value: "medical", label: "의과대학" },
    { value: "nursing", label: "간호대학" },
    { value: "pharmacy", label: "약학대학" },
    { value: "scranton", label: "스크랜튼대학" },
    { value: "ai", label: "인공지능대학" },
    { value: "hokma", label: "호크마교양대학" },
  ];

  const options3 = [
    { value: "0", label: "0분위" },
    { value: "1", label: "1분위" },
    { value: "2", label: "2분위" },
    { value: "3", label: "3분위" },
    { value: "4", label: "4분위" },
    { value: "5", label: "5분위" },
    { value: "6", label: "6분위" },
    { value: "7", label: "7분위" },
    { value: "8", label: "8분위" },
    { value: "9", label: "9분위" },
    { value: "10", label: "10분위" },
  ];

  return (
    <Container>
      <Select
        options={options1}
        value={filters.year}
        onChange={handleYearChange}
        placeholder={
          <>
            <FontAwesomeIcon icon={faCalendar} />
            학년
          </>
        }
        isClearable={true}
        components={{ SingleValue: YearSingleValue }}
        styles={CustomStyles}
      />
      <Select
        options={options2}
        value={filters.college}
        onChange={handleCollegeChange}
        placeholder={
          <>
            <FontAwesomeIcon icon={faBook} />
            단과대학
          </>
        }
        styles={CustomStyles}
        isClearable={true}
        components={{ SingleValue: CollegeSingleValue }}
      />
      <Select
        options={options3}
        value={filters.income}
        onChange={handleIncomeChange}
        placeholder={
          <>
            <FontAwesomeIcon icon={faHouse} />
            소득분위
          </>
        }
        styles={CustomStyles}
        isClearable={true}
        components={{ SingleValue: IncomeSingleValue }}
      />
      <InputWrapper>
        <Icon icon={faStar} />
        <Input
          type="text"
          value={filters.grade}
          onChange={handleGradeChange}
          placeholder="학점 입력"
        />
      </InputWrapper>
    </Container>
  );
};

export default FilterOption;
