import styled from "styled-components";

export const Container = styled.div`
    max-width: 919px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
`;

export const ShortInfo = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: #888888
    margin-top: 5px;
`;

export const ListContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 20px;
`;

export const ListTitle = styled.h3`
    font-size: 24px;
    font-weight: bold;
`;

export const Highlight = styled.span`
    background-color: #D8EAD6;
    padding: 2px 5px;
    border-radius: 3px;
`;

export const ListContent = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: #333333;
`;
