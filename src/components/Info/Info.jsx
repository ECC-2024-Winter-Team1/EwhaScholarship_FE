import React, { useState, useEffect } from "react"; 
import { 
  Container, ProfileCard, ProfileInfo, ProfileIcon, 
  SaveButton, InfoCard, InfoRow, Dropdown, 
  DropdownIcon, Select, InputField, DeleteButton
} from "./Info.style";
import axios from "axios";
import Header from "../Header/StyledHeader";
import ReviewList from "../Review/ReviewList";

const Info = () => {
  const token = localStorage.getItem("token");

  const [username, setUsername] = useState(""); 
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [gpa, setGpa] = useState("");
  const [incomeLevel, setIncomeLevel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await axios.get("http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/user", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        
        setUsername(response.data.data.username);
        setDepartment(response.data.data.department);
        setYear(String(response.data.data.year));
        setGpa(String(response.data.data.gpa));
        setIncomeLevel(String(response.data.data.incomeLevel));

      } catch (error) {
        alert("데이터 가져오는 중 오류 발생");
        console.error("데이터 가져오는 중 오류 발생:", error);
      }
    };

    if (token) fetchData(); 
  }, [token]);

  const setChangeInfo = async () => {
    try {
      const payload = { department, year, gpa, incomeLevel };

      await axios.patch("http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/user", payload, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      alert("정보 수정 성공");
    } catch (error) {
      alert("정보 수정 중 오류 발생");
      console.error("정보 수정 중 오류 발생:", error);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("회원탈퇴 하시겠습니까?")) {
      try {
        await axios.delete("http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/auth/delete-account", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        alert("회원 탈퇴 성공");
        localStorage.removeItem("token");
        window.location.href = "/login";
      } catch (error) {
        alert("회원 탈퇴 중 오류 발생");
      }
    }
  };
 

  return (
    <>
    <Header />
    <Container>
      <ProfileCard>
        <ProfileIcon src="/user.png" alt="Icon" />
        <ProfileInfo> 
          <h2>{username}님 안녕하세요</h2> 
        </ProfileInfo>
        <DeleteButton onClick={handleDeleteAccount} >회원탈퇴</DeleteButton>
      </ProfileCard>

      <InfoCard>
        <InfoRow>
          <span>학년</span>
          <Dropdown>
            <DropdownIcon src="/calender.png" alt="Icon" />
            <Select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
              <option value="4">4학년</option>
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
              <option value="1">1분위</option>
              <option value="2">2분위</option>
              <option value="3">3분위</option>
              <option value="4">4분위</option>
              <option value="5">5분위</option>
              <option value="6">6분위</option>
              <option value="7">7분위</option>
              <option value="8">8분위</option>
              <option value="9">9분위</option>
              <option value="10">10분위</option>
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
<<<<<<< feat/reviewlist
=======
    <ReviewList />
>>>>>>> main
    </>
  );
};

export default Info;
