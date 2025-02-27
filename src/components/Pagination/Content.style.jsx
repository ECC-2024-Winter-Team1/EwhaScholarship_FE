import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  cursor: pointer;

  &:hover {
    color: #007245;
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  gap: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50%;
  width: auto;
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 1px 5px 5px 1px rgb(164, 177, 162);
  background-color: #f0f7f4;
  padding: 10px 20px;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Text = styled.p`
  margin-left: 320px;
  font-size: 25px;
  font-weight: 550;
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
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: #00462a;
  border-radius: 20px;
  padding: 5px 15px;

  a {
    text-decoration-line: none;
    color: white;
    font-size: 18px;
    font-weight: 530;
  }

  &:hover {
    background-color: #00804d;
  }
`;
