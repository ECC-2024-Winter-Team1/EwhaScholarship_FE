import React, { useState, useEffect } from "react"; 
import { 
  Container, ProfileCard, ProfileInfo, ProfileIcon, 
  SaveButton, InfoCard, InfoRow, Dropdown, 
  DropdownIcon, Select, InputField 
} from "./NewInfo.style";

const NewInfo = () => {
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState(""); 
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [gpa, setGpa] = useState('');
  const [incomeLevel, setIncomeLevel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await fetch("http://localhost:5000/user", { 
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const result = await response.json();
          setEmail(result.email);
          setDepartment(result.department);
          setYear(result.year);
          setGpa(result.gpa);
          setIncomeLevel(result.incomeLevel);
        } else {
          console.error("유저 정보 가져오기 실패");
        }
      } catch (error) {
        console.error("데이터 가져오는 중 오류 발생:", error);
      }
    };

    if (token) fetchData(); 
  }, [token]);

  const setChangeInfo = async () => {
    try {
      const payload = { department, year, gpa, incomeLevel };

      const response = await fetch("http://localhost:5000/user", { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("정보 수정 성공");
      } else {
        alert("정보 수정 실패");
      }
    } catch (error) {
      alert("정보 수정 중 오류 발생:", error.message);
    }
  };

  return (
    <Container>
      <ProfileCard>
        <ProfileIcon src="/user.png" alt="Profile Icon" />
        <ProfileInfo> 
          <h2>{email}님 안녕하세요</h2> 
        </ProfileInfo>
      </ProfileCard>

      <InfoCard>
        <InfoRow>
          <span>학년</span>
          <Dropdown>
            <DropdownIcon src="/calender.png" alt="Icon" />
            <Select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="1학년">1학년</option>
              <option value="2학년">2학년</option>
              <option value="3학년">3학년</option>
              <option value="4학년">4학년</option>
            </Select>
          </Dropdown>
        </InfoRow>

        <InfoRow>
          <span>단과대학</span>
          <Dropdown>
            <DropdownIcon src="/book.png" alt="Icon" />
            <Select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="인문과학대학">인문과학대학</option>
              <option value="사회과학대학">사회과학대학</option>
              <option value="자연과학대학">자연과학대학</option>
              <option value="(엘텍)공과대학">(엘텍)공과대학</option>
              <option value="음악대학">음악대학</option>
              <option value="조형예술대학">조형예술대학</option>
              <option value="사범대학">사범대학</option>
              <option value="경영대학">경영대학</option>
              <option value="신산업융합대학">신산업융합대학</option>
              <option value="의과대학">의과대학</option>
              <option value="간호대학">간호대학</option>
              <option value="약학대학">약학대학</option>
              <option value="스크랜튼대학">스크랜튼대학</option>
              <option value="인공지능대학">인공지능대학</option>
              <option value="호크마교양대학">호크마교양대학</option>
            </Select>
          </Dropdown>
        </InfoRow>

        <InfoRow>
          <span>소득분위</span>
          <Dropdown>
            <DropdownIcon src="/home.png" alt="Icon" />
            <Select value={incomeLevel} onChange={(e) => setIncomeLevel(e.target.value)}>
              <option value="1분위">1분위</option>
              <option value="2분위">2분위</option>
              <option value="3분위">3분위</option>
              <option value="4분위">4분위</option>
              <option value="5분위">5분위</option>
              <option value="6분위">6분위</option>
              <option value="7분위">7분위</option>
              <option value="8분위">8분위</option>
              <option value="9분위">9분위</option>
              <option value="10분위">10분위</option>
            </Select>
          </Dropdown>
        </InfoRow>

        <InfoRow>
          <span>학점</span>
          <Dropdown>
            <DropdownIcon src="/star.png" alt="Icon" />
            <InputField
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              type="number"
              step="0.01"
            />
          </Dropdown>
        </InfoRow>
      </InfoCard>

      <SaveButton onClick={setChangeInfo}>저장하기</SaveButton>
    </Container>
  );
};

export default NewInfo;
