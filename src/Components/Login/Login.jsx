import React from "react";
import GoogleButton from "./GoogleButton";
import "./LoginStyle.css";

const Login = () => {
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
        <GoogleButton />
    </Container>
  )
}

export default Login;