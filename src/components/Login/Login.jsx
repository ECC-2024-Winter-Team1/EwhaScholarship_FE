import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginSubtitle,
  Description,
  InputLabel,
  Group,
  Item,
  SubmitButton,
  Icon2,
  InputStyle1,
  StyledLink,
} from "./Login.style";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();

  const hasError = username === "" || password === "";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result = response.data;

      if (response.status === 200) {
        setLoginCheck(false);
        localStorage.setItem("token", result.data.accessToken);
        navigate("/");
        alert("로그인 되었습니다");
      } else {
        setLoginCheck(true);
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      setLoginCheck(true);

      if (error.response) {
        console.error("로그인 오류:", error.response.data || error.message);

        if (error.response.status === 500) {
          alert("아이디와 비밀번호가 일치하지 않습니다.");
        }
        if (error.response.status === 404) {
          alert("존재하지 않는 아이디입니다.");
        }
      } else {
        alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요.");
      }
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <LoginTitle>EWHA Scholar</LoginTitle>
        <LoginSubtitle>이화장학</LoginSubtitle>

        <Group>
          <Item>
            <Icon2 src="/profile.png" alt="Icon" />
            <InputLabel htmlFor="id">아이디</InputLabel>
            <InputStyle1
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="form_username"
              name="form_username"
            />
          </Item>
          <Item>
            <Icon2 src="/key.png" alt="Icon" />
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <InputStyle1
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="form_password"
              name="form_password"
            />
          </Item>
        </Group>

        <SubmitButton type="submit" onClick={handleLogin} disabled={hasError}>
          로그인
        </SubmitButton>
        <Description>
           <StyledLink to="/join">회원가입하기</StyledLink>
        </Description>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
