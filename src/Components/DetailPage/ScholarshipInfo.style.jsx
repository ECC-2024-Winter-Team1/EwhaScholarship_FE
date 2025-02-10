import styled from "styled-componenets";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 918px;
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const ShortInfo = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;

`;

export const List = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

export const ListTitle = styled.h3`
    font-size: 30px;
    font-weight: bold;
`;

export const Highlight = styled.span`
    background-color: #D8EAD6
`;

export const ListContent = styled.p`
    font-size: 16px;
`;
