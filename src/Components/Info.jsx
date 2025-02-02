import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="container">
      {/* 프로필 카드 */}
      <div className="profile-card">
        <img src="/user.png" alt="Profile Icon" className="profile-icon" />
        <div className="profile-info">
          <h2>김이화님 안녕하세요</h2>
          <p>avocado@ewhain.net</p>
        </div>
      </div>

      {/* 정보 카드 */}
      <div className="info-card">
        <div className="info-row">
          <span>이수학기</span>
          <div className="dropdown">
            <img src="/calender.png" alt="Icon" className="dropdown-icon" />
            <select>
              <option>가져온데이터</option>
              <option>1학년</option>
              <option>2학년</option>
              <option>3학년</option>
              <option>4학년</option>
            </select>
          </div>
        </div>

        <div className="info-row">
          <span>전공</span>
          <div className="dropdown">
            <img src="/book.png" alt="Icon" className="dropdown-icon" />
            <select>
              <option>가져온데이터</option>
              <option>인문과학대학</option>
              <option>사회과학대학</option>
              <option>자연과학대학</option>
              <option>(엘텍)공과대학</option>
              <option>음악대학</option>
              <option>조형예술대학</option>
              <option>사범대학</option>
              <option>경영대학</option>
              <option>신산업융합대학</option>
              <option>의과대학</option>
              <option>간호대학</option>
              <option>약학대학</option>
              <option>스크랜튼대학</option>
              <option>인공지능대학</option>
              <option>호크마교양대학</option>
              <option>AI융합학부</option>
              <option>건강과학대학</option>
            </select>
          </div>
        </div>

        <div className="info-row">
          <span>소득분위</span>
          <div className="dropdown">
            <img src="/home.png" alt="Icon" className="dropdown-icon" />
            <select>
              <option>가져온데이터</option>
              <option>1분위</option>
              <option>2분위</option>
              <option>3분위</option>
              <option>4분위</option>
              <option>5분위</option>
              <option>6분위</option>
              <option>7분위</option>
              <option>8분위</option>
              <option>9분위</option>
              <option>10분위</option>
            </select>
          </div>
        </div>

        <div className="info-row">
          <span>학점</span>
          <div className="dropdown">
            <img src="/star.png" alt="Icon" className="dropdown-icon" />
            <input
              type="number"
              step="0.01"
              placeholder="가져온데이터"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* 저장 버튼 */}
      <button className="save-button">저장하기</button>
    </div>
  );
};

export default Info;