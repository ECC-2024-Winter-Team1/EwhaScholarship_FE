import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  JoinContainer,
  JoinForm,
  JoinTitle,
  JoinSubtitle,
  InputLabel,
  InputStyle,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectField,
  SubmitButton,
  Icon1,
  Icon2,
  InputStyle1,
} from "./Join.style";
import axios from "axios";
import { API_URL } from "../../consts";
import { DEPARTMENTS, YEARS, INCOMELEVELS } from "./join.const";

export default function Join() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    department: "",
    year: "",
    gpa: "",
    incomeLevel: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    incomeLevel: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const gpaRef = useRef(null);

  const validateForm = () => {
    let hasError = false;

    setErrors({
      username: false,
      password: false,
      gpa: false,
    });

    if (!formData.username) {
      setErrors((prev) => ({ ...prev, username: true }));
      usernameRef.current?.focus();
      hasError = true;
    }
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: true }));
      !hasError && passwordRef.current?.focus();
      hasError = true;
    }
    if (!formData.gpa) {
      setErrors((prev) => ({ ...prev, gpa: true }));
      !hasError && gpaRef.current?.focus();
      hasError = true;
    }

    return hasError;
  };

  const onSubmit = (e) => {
    // TODO: 사용하면 뭐가 좋은지
    e.preventDefault();

    if (validateForm()) return;

    // TODO: async await 으로 수정
    axios
      .post(
        API_URL.JOIN,
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })

      .catch((error) => {
        let errorMessage = "회원가입 중 오류가 발생했습니다.";

        if (error.response?.data?.message?.includes("Duplicate entry")) {
          errorMessage = "아이디가 중복되었습니다. 다른 아이디를 사용해주세요.";
        }

        alert(errorMessage);
        console.error("회원가입 오류", error);
      });
  };

  return (
    <JoinContainer>
      <JoinForm>
        <JoinTitle>EWHA Scholar</JoinTitle>
        <JoinSubtitle>이화장학</JoinSubtitle>

        <SelectGroup>
          <SelectItem style={{ display: "flex", alignItems: "center" }}>
            <Icon2 src="/profile.png" alt="profileIcon" />
            <InputLabel htmlFor="username">아이디</InputLabel>
            <InputStyle1
              ref={usernameRef}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              $hasError={errors.username}
            />
          </SelectItem>

          <SelectItem>
            <Icon2 src="/key.png" alt="keyIcon" />
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <InputStyle1
              ref={passwordRef}
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              $hasError={errors.password}
            />
          </SelectItem>

          <SelectItem>
            <Icon1 src="/book.png" alt="bookIcon" />
            <SelectLabel htmlFor="department">단과대학</SelectLabel>
            <SelectField
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              {DEPARTMENTS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectField>
          </SelectItem>

          <SelectItem>
            <Icon1 src="/calender.png" alt="calenderIcon" />
            <SelectLabel htmlFor="year">학년</SelectLabel>
            <SelectField
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              {YEARS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectField>
          </SelectItem>

          <SelectItem>
            <Icon1 src="/home.png" alt="homeIcon" />
            <SelectLabel htmlFor="incomeLevel">소득분위</SelectLabel>
            <SelectField
              id="incomeLevel"
              name="incomeLevel"
              value={formData.incomeLevel}
              onChange={handleChange}
            >
              {INCOMELEVELS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectField>
          </SelectItem>

          <SelectItem>
            <Icon1 src="/star.png" alt="Icon" />
            <SelectLabel htmlFor="gpa">학점</SelectLabel>
            <InputStyle
              type="number"
              id="gpa"
              name="gpa"
              placeholder="0.00"
              step="0.01"
              min="0"
              max="4.5"
              $hasError={errors.gpa}
              value={formData.gpa}
              onChange={handleChange}
            />
          </SelectItem>
        </SelectGroup>

        <SubmitButton type="submit" onClick={onSubmit}>
          회원가입
        </SubmitButton>
      </JoinForm>
    </JoinContainer>
  );
}
