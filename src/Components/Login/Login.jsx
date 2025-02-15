import React from "react";
import GoogleButton from "./GoogleButton";
import { Container, TitleContainer, Subtitle, Title, Description } from "./Login.style";
import { useNavigate } from "react-router-dom";

//채은님 로그인 화면 완성본과 많이 다름 내가 바꾼 이 파일은 어떻게 둬야 나중에 머지할 때 편할까 이 파일은 필요없는데//
const Login = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate("/main");
    };

    const moveToJoin = () => {
        navigate("/join");
    }

    return (
        <Container> 
            <TitleContainer>
                <Subtitle>
                    EWHA Scholar
                </Subtitle>
                <Title>
                    이화장학
                </Title>
            </TitleContainer>
            <Description>
                로그인하시고 <br /> 받을 수 있는 장학금을 찾아보세요!
            </Description>
            <GoogleButton onLoginSuccess={handleLoginSuccess} />
            <button onClick={moveToJoin}>회원가입</button>
        </Container>
    );
};

export default Login;