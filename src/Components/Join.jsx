import React, { useState, useRef } from "react";
import "./Join.css";

const Join = () => {
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [major, setMajor] = useState("");
  const [income, setIncome] = useState("");
  const [grade, setGrade] = useState("");

  const emailRef = useRef();
  const gradeRef = useRef();
  const semesterRef = useRef();
  const majorRef = useRef();
  const incomeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

     // 폼에서 작성되지 않은 항목이 있는 채로 제출되려 하면 포커싱되거나 항목 테두리 색을 빨간색으로 바뀌게 함
    
    if (email === "") {
      emailRef.current.focus();
      return;
    }

    if (semester === "") {
      semesterRef.current.style.border = "2px solid red";
      return;
    }

    if (major === "") {
      majorRef.current.style.border = "2px solid red";
      return;
    }

    if (income === "") {
      incomeRef.current.style.border = "2px solid red";
      return;
    }

    if (grade === "") {
      gradeRef.current.focus();
      return;
    }
  };

  return (
    <div className="join-container">
      <div className="join-form">
        <h1 className="join-title">EWHA Scholar</h1>
        <h2 className="join-subtitle">이화장학</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">회원정보 입력</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="example@ewhain.net"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="select-group">
            <div className="select-item">
              <label htmlFor="semester" className="select-label">학년</label>
              <select
                ref={semesterRef}
                id="semester"
                value={semester}
                onChange={(e) => {
                  setSemester(e.target.value);
                  semesterRef.current.style.border = ""; // 선택 시 테두리 초기화
                }}
                className="select-field"
              >
                <option value="">학년 선택</option>
                <option value="1학년">1학년</option>
                <option value="2학년">2학년</option>
                <option value="3학년">3학년</option>
                <option value="4학년">4학년</option>
              </select>
            </div>

            <div className="select-item">
              <label htmlFor="major" className="select-label">단과대학</label>
              <select
                ref={majorRef}
                id="major"
                value={major}
                onChange={(e) => {
                  setMajor(e.target.value);
                  majorRef.current.style.border = "";
                }}
                className="select-field"
              >
                <option value="">단과대학 선택</option>
                <option value="인문과학대학">인문과학대학</option>
                <option value="사회과학대학">사회과학대학</option>
                <option value="자연과학대학">자연과학대학</option>
              </select>
            </div>

            <div className="select-item">
              <label htmlFor="income" className="select-label">소득분위</label>
              <select
                ref={incomeRef}
                id="income"
                value={income}
                onChange={(e) => {
                  setIncome(e.target.value);
                  incomeRef.current.style.border = "";
                }}
                className="select-field"
              >
                <option value="">소득분위 선택</option>
                <option value="1분위">1분위</option>
                <option value="2분위">2분위</option>
                <option value="3분위">3분위</option>
              </select>
            </div>

            <div className="select-item">
              <label htmlFor="grade" className="select-label">학점</label>
              <input
                ref={gradeRef}
                type="number"
                id="grade"
                placeholder="0.00"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                step="0.01"
                min="0"
                max="4.5"
                className="input-style"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Join;