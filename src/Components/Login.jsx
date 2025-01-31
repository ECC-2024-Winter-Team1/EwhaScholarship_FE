import React from "react";
import GoogleButton from "./GoogleButton";
import "./Login.css"; // 스타일 파일 import

const Login = () => {
  return (
    <div className="container">
      {/* Title */}
      <div className="title-container">
        <h1 className="subtitle">EWHA Scholar</h1>
        <h2 className="title">이화장학</h2>
      </div>

      {/* Description */}
      <p className="description">
        로그인하시고 <br /> 받을 수 있는 장학금을 찾아보세요!
      </p>

      {/* Google Sign-In */}
      <GoogleButton />
    </div>
  );
};

export default Login;