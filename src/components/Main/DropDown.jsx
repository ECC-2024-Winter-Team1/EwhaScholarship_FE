import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  DropDownWrapper,
  IconStyle,
  StyledSelect,
  StyledOption,
  Wrapper,
} from "./DropDown.style";

export default function DropDown(setOption) {
  const year = [
    { value: "freshman", label: "1학년" },
    { value: "sophomore", label: "2학년" },
    { value: "junior", label: "3학년" },
    { value: "senior", label: "4학년" },
  ];

  const department = [
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

  const incomeLevel = [
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
    <Wrapper>
      <DropDownWrapper>
        <IconStyle>
          <FontAwesomeIcon icon={faCalendar} />
        </IconStyle>
        <StyledSelect
          name="year"
          onChange={(event) => setOption(event.target.name, event.target.value)}
        >
          <option value="none" hidden>
            학년
          </option>
          {year.map(({ value, label }) => (
            <StyledOption key={value} value={value}>
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
      </DropDownWrapper>
      <DropDownWrapper>
        <IconStyle>
          <FontAwesomeIcon icon={faBook} />
        </IconStyle>
        <StyledSelect
          name="department"
          onChange={(event) => setOption(event.target.name, event.target.value)}
        >
          <option value="none" hidden>
            단과대학
          </option>
          {department.map(({ value, label }) => (
            <StyledOption key={value} value={value}>
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
      </DropDownWrapper>
      <DropDownWrapper>
        <IconStyle>
          <FontAwesomeIcon icon={faHouse} />
        </IconStyle>
        <StyledSelect
          name="incomeLevel"
          onChange={(event) => setOption(event.target.name, event.target.value)}
        >
          <option value="none" hidden>
            소득분위
          </option>
          {incomeLevel.map(({ value, label }) => (
            <StyledOption key={value} value={value}>
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
      </DropDownWrapper>
    </Wrapper>
  );
}
