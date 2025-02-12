import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    LoginContainer, LoginForm, LoginTitle, LoginSubtitle, Description,
    InputLabel, Group, Item, SubmitButton, Icon2, InputStyle1, StyledLink
} from "./Login.style";
import axios from "axios";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(
                "로그인서버주소넣을공간",
                {
                    id: id,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = response.data;

            if (response.status === 200) {
                setLoginCheck(false); 
                sessionStorage.setItem("token", result.token);
                sessionStorage.setItem("id", result.id);
                navigate("/"); 
            } 
            else {
                setLoginCheck(true); 
                alert("아이디와 비밀번호가 일치하지 않습니다."); 
            }
        } catch (error) {
            setLoginCheck(true); 
            alert("로그인 오류가 발생했습니다. 다시 시도해주세요."); 
        }
    };

    return (
        <LoginContainer>
            <LoginForm>
                <LoginTitle>EWHA Scholar</LoginTitle>
                <LoginSubtitle>이화장학</LoginSubtitle>

                <Group>
                    <Item>
                        <Icon2 src="/profile.png" alt="Icon"/>
                        <InputLabel htmlFor="id">아이디</InputLabel>
                        <InputStyle1 
                            value={id} onChange={(e) => setId(e.target.value)}
                            type="text" id="form_id" name="form_id"/>
                    </Item>
                    <Item>
                        <Icon2 src="/key.png" alt="Icon"/>
                        <InputLabel htmlFor="password">비밀번호</InputLabel>
                        <InputStyle1 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password" id="form_password" name="form_password" />
                    </Item>
                </Group>

                <SubmitButton type="submit" onClick={handleLogin}>
                    로그인
                </SubmitButton>
            </LoginForm>
            <Description>
               <StyledLink to="/join">회원가입하기</StyledLink>
            </Description>
        </LoginContainer>
    );
};

export default Login;
