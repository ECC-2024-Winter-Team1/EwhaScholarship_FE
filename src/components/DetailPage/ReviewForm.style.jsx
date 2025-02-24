import styled from "styled-components";

export const Container = styled.div`
    max-width: 919px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 100px;
    padding-top: 80px;
`;

export const ReviewSectionName = styled.h2`
    font-size: 44px;
    font-weight: normal;
    font-family: 'Gowun Batang', serif;
`;

export const ReviewFormArea = styled.div`
    width: 918px;
    height: 240px;
    padding: 14px 23px;
    background-color: #00462A;
    border-radius: 25px;
    flex-direction: column;
    gap: 15px;
`;

export const Conditions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const IfReward = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
    flex-direction: row-reverse;
    color: #FFFFFF;
    font-size: 16px;
    font-family: "Pretendard", sans-serif;
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    border-radius: 20px;
`;

export const YearInput = styled.input`
    margin-left: 20px;
    border-radius: 20px;
    padding: 8px;
    border: none;
    width: 100px;
    font-family: "Pretendard", sans-serif;
    font-size: 14px;
`;

export const DropDown = styled.select`
    border-radius: 20px;
    padding: 8px;
    border: none;
    width: 100px;
    cursor: pointer;
    appearance: none;
    font-family: "Pretendard", sans-serif;

    option{
        font-size: 14px;
        color: #333333; 
    }
`;

export const ReviewContent = styled.div`  
    margin-top: 15px;
    width: 884px;
    height: 99px;

    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        overflow: auto;
        border-radius: 18px;
        padding: 12px 17px;
        border: none;
        font-size: 16px;
        font-family: "Pretendard", sans-serif;
    }
`;

export const Button = styled.button`
    margin-top: 40px;
    outline: none;
    border: none;
    width: 923px;
    height: 50px;
    background-color: #F0F7F4;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:active {
    background-color: #00462A;
    transform: translateY(2px);
    }
`;