import styled from "styled-components";

export const Title = styled.h2`
  color: #00462a;
  div {
    &:last-child {
      font-size: 35px;
    }
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40%;
  border-bottom: 5px solid #00462a;
`;


export const Link = styled.a`
  color: black;
  font-weight: 600;
  font-size: 20px;
  text-decoration-line: none;
  margin-right: 30px;

  span: after {
    content: "|";
    margin-left: 25px;
    color: black;
  }

  &:hover {
    color: #00462a;
    text-decoration-line: underline;
  }
`;
