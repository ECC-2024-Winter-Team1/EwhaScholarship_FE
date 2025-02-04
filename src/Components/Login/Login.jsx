import React from "react";
import styled from "styled-components";
import GoogleButton from "./GoogleButton";


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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 270px;
  width: 427px;
  height: 96px;
`;

const Subtitle = styled.h1`
  font-size: 1rem;
  font-weight: 300; 
  color: #00462A;
  margin: 0;
  padding: 0;
  line-height: 1; 
`;

const Title = styled.h2`
  font-family: 'SeoulNamsanM', sans-serif;
  font-weight: 700;
  font-size: 2.15rem;
  color: #00462A;
  margin: 5px;
  padding: 0;
  line-height: 1;
  margin-bottom: 24px;
`;

const Description = styled.p`
  position: absolute;
  top: 337px;
  width: 348px;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 21px;
  color: #333333;
`;