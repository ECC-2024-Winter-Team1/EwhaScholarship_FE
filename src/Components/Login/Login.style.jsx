import styled from "styled-components";
import { Link } from "react-router-dom";

export const Icon2 = styled.img`
    width: 20x;
    height: 20px;
    margin-left: 7px;
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ffffff;
    font-family: 'Pretendard', sans-serif;
`;

export const LoginForm = styled.div`
    text-align: center;
    width: 18rem;
`;

export const LoginTitle = styled.h1`
    font-size: 1rem;
    font-weight: 340;
    color: #00462A;
    margin: 0;
    padding: 0;
    line-height: 1;
    width: 105%;
`;

export const LoginSubtitle = styled.h2`
    width: 105%;
    font-family: 'SeoulNamsanM', sans-serif;
    font-weight: 730;
    font-size: 2.15rem;
    color: #00462A;
    margin: 5px;
    padding: 0;
    line-height: 1;
    margin-bottom: 35px;
`;


export const InputLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
    color: #333333;
    width: 100%;
    text-align: left;
`;

export const InputStyle1 = styled.input`
    width: 190%;
    padding: 12px 16px;
    border: 1px solid #00462A;
    border-radius: 12px;
    background-color: white;
    font-size: 0.875rem;
    outline: none;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 105%;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    height: 40px;
`;

export const SubmitButton = styled.button`
    width: 105%;
    background-color: #00462A;
    color: white;
    padding: 12px;
    margin-top: 24px;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 0;
    cursor: pointer;
`;

export const Description = styled.p`
  position: absolute;
  top: 520px;
  padding-left: 13px;
  width: 348px;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #333333;
  cursor: pointer;
  text-decoration: underline;
`;


export const StyledLink = styled(Link)`
  color: #333333;
  text-decoration: underline;
  
  &:hover {
    color: gray;
  }
`;