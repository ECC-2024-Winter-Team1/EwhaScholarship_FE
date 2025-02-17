import styled from "styled-components";

export const Icon1 = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 7px;
`;

export const Icon2 = styled.img`
  width: 20x;
  height: 20px;
  margin-left: 7px;
`;

const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: "Pretendard", sans-serif;
`;

const JoinForm = styled.div`
  text-align: center;
  width: 18rem;
`;

const JoinTitle = styled.h1`
  font-size: 1rem;
  font-weight: 340;
  color: #00462a;
  margin: 0;
  padding: 0;
  line-height: 1;
  width: 105%;
`;

const JoinSubtitle = styled.h2`
  width: 105%;
  font-family: "SeoulNamsanM", sans-serif;
  font-weight: 730;
  font-size: 2.15rem;
  color: #00462a;
  margin: 5px;
  padding: 0;
  line-height: 1;
  margin-bottom: 35px;
`;

const InputGroup = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333333;
  width: 100%;
  text-align: left;
`;

const InputField = styled.input`
  width: 88.5%;
  padding: 12px 16px;
  border: 1.5px solid #00462a;
  border-radius: 12px;
  background-color: #d9d9d9;
  font-size: 0.875rem;
  outline: none;
`;

const InputStyle = styled.input`
  width: 60%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? "#FF0000" : "#00462A")};
  border-radius: 12px;
  background-color: white;
  font-size: 0.875rem;
  outline: none;
`;

const InputStyle1 = styled.input`
  width: 190%;
  padding: 11px 16px;
  border: 1px solid ${(props) => (props.hasError ? "#FF0000" : "#00462A")};
  border-radius: 12px;
  background-color: white;
  font-size: 0.875rem;
  outline: none;
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 105%;
`;

const SelectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 40px;
`;

const SelectLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333333;
  width: 30%;
  text-align: left;
`;

const SelectField = styled.select`
  width: 70%;
  height: 40px;
  padding: 8px 12px;
  border: 1.5px solid #00462a;
  border-radius: 12px;
  background-color: #f8f9fa;
  font-size: 0.875rem;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 105%;
  background-color: #00462a;
  color: white;
  padding: 12px;
  margin-top: 24px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export {
  JoinContainer,
  JoinForm,
  JoinTitle,
  JoinSubtitle,
  InputGroup,
  InputLabel,
  InputField,
  InputStyle,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectField,
  SubmitButton,
  InputStyle1,
};
