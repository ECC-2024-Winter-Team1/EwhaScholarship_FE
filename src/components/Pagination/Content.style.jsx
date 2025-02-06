import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50%;
  width: 1200px;
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 1px 5px 5px 1px rgb(164, 177, 162);
  background-color: #f0f7f4;
  padding: 10px 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;

  h2 {
    margin-bottom: 5px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #00462a;
  border-radius: 25px;
  padding: 10px 15px;

  a {
    text-decoration-line: none;
    color: white;
    font-size: 18px;
    font-weight: 530;
  }
`;
