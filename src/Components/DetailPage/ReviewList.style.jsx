import styled from "styled-components"

export const Container = styled.div`
    max-width: 919px;
    margin: 20px auto;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const FilterLabel = styled.label`

`;

export const ReviewCard = styled.div`
    width: 600px;
    padding: 25px;
    border-radius: 20px;
    background: #F0F7F4;
    margin: 20px 0;
`;

export const Pagination = styled.div`
    display: flex;
    justifiy-content: center;
    gap: 10px;
    margin-top: 20px;
`;
