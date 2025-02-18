import styled from "styled-components";

export const Container = styled.div`
    max-width: 919px;
    margin-left: 200px;
    background-color: white;
    display: flex;
`;

export const ReviewSectionName = styled.h2`
    font-size: 40px;
    margin-left: 200px;
    font-weight: normal;
`;

export const ReviewFormArea = styled.div`
    position: absolute;
    width: 918px;
    height: 240px;
    padding: 14px 23px;
    background-color: #00462A;
    border-radius: 20px;
    flex-direction: column;
    gap: 15px;
    margin-left: 200px;
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
    font-size: 14px;
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    border-radius: 20px;
`;

export const Number = styled.input`
    margin-left: 20px;
    border-radius: 20px;
    padding: 8px;
    border: none;
    width: 100px;
`;

export const DropDown = styled.select`
    border-radius: 20px;
    padding: 8px;
    border: none;
    width: 100px;
    cursor: pointer;
    appearance: none;

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
        font-size: 14px;
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
`;