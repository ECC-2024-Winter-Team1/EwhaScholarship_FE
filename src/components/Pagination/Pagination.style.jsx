import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1350px;
  margin: 50px auto;
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ $selected }) => ($selected ? "#00462a" : "#333333")};
  text-decoration: ${({ $selected }) =>
    $selected ? "underline 5px #00462a" : "none"};

  &:hover {
    color: #00462a;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 25px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px auto 0;
`;
