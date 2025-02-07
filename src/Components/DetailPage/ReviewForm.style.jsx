import styled from "styled-components";

export const ReviewFormArea = styled.div`
    position: absolute;
    width: 918px;
    height: 240px;
    padding: 14px 23px;
    background-color: #00462A;
    border-radius: 18px;
    left: 50px;
`;

export const Conditions = styled.div`
    margin-top: 5px;
    width: 918px;
    height: 30px;
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const IfReward = styled.label`
    color: #FFFFFF;
`;

export const ReviewContent = styled.div`  
    margin-top: 15px;
    width: 918px;
    height: 115px;

    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        overflow: auto;
        border-radius: 18px;
    }
`;

export const Button = styled.button`
    margin-top: 20px;
    outline: none;
    border: none;
    width: 923px;
    height: 50px;
    background-color: #F0F7F4;
    border-radius: 18px;
`;