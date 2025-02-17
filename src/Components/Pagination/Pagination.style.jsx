import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 15px;
  font-weight: 550;
  color: #333333;
  &:focus {
    color: #00462a;
    text-decoration: underline 5px #00462a;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  display: flex;
  margin-left: 320px;
  font-size: 25px;
`;
