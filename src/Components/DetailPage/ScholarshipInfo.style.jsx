import styled from "styled-components";

export const Container = styled.div`
    max-width: 919px;
    margin-left: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: normal;
`;

export const ShortInfo = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;

`;

export const ListContainer = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

export const ListTitle = styled.h3`
    font-size: 30px;
    font-weight: normal;
`;

export const Highlight = styled.span`
    background-color: #D8EAD6
`;

export const ListContent = styled.p`
    font-size: 16px;
`;
