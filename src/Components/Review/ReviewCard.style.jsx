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

export const Card = styled.div`
  width: 600px;
  background: #F0F7F4;
  padding: 25px;
  border-radius: 17px;
  margin: 20px 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const User = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 5px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Top = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 7px;
  line-height: 1.2; 
`;

export const RightTop = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  top: -15px;
  right: -470px;
  line-height: 1.2; 
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Badge = styled.span`
  background: #00462A;
  color: white;
  padding: 2px 18px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 400;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  line-height: 1.4; 
`;

export const Icon = styled.span`
  font-size: 14px;
  color: #d4af37;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  color: #00462A;
  cursor: pointer;
  font-size: 13px;
  margin-top: -10px;
  font-weight: 500;
`;

export const ReviewText = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 4px;
  line-height: 1.4;
`;


export const EditContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EditInput = styled.input`
  padding: 8px 12px;
  margin: 8px 0 0 0;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  margin: 8px 0 0 0;
  font-size: 14px;
  background-color: #00462A;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 80px;

`;