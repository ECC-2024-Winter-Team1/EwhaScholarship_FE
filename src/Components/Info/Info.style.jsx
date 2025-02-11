import styled from "styled-components";

export const Container = styled.div`
  font-family: "Pretendard", sans-serif;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const ProfileCard = styled.div`
  display: flex;
  width: 600px;
  height: 74px;
  border-radius: 17px;
  align-items: center;
  background: #f0f7f4;
  padding: 22px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const ProfileIcon = styled.img`
  margin: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 28px;
  margin-left: 18px;
`;

export const ProfileInfo = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0 1px 0;
    color: #00462a;
  }
  p {
    font-size: 17px;
    font-weight: 350;
    color: #00462a;
    margin-top: 5px;
  }
`;

export const InfoCard = styled.div`
  width: 600px;
  background: #f0f7f4;
  padding: 25px;
  border-radius: 17px;
  margin: 20px 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 30px;

  span {
    font-size: 19px;
    font-weight: 500;
    color: #333333;
    min-width: 30px;
    text-align: right;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1.5px solid #00462a;
  border-radius: 17px;
  padding: 8px 12px;
  width: 160px;
  height: 23px;
`;

export const DropdownIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 7px;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  color: #00462a;
  font-weight: 500;
  background: transparent;
  font-size: 14px;
  width: 100%;
  padding-left: 5px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px 12px;
  border: none;
  outline: none;
  background: transparent;
  color: #00462a;
  font-size: 14px;
`;

export const SaveButton = styled.button`
  background: #00462a;
  color: white;
  border: none;
  padding: 12px;
  width: 640px;
  border-radius: 17px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background: #1e3b23;
  }
`;
