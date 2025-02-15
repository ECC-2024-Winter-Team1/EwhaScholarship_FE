import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 918px;
    margin: 0 auto;
    padding: 30px 0 30px 50px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;
`;

export const Title = styled.h2`
    font-size: 45px;
    font-weight: normal;
    margin-bottom: 0;
`;

export const Summary = styled.p`
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 0;

`;

export const InfoWrapper = styled.div`
    gap: 15px;
    display: flex;
    flex-direction: column;
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0px;
`;

export const Highlight = styled.span`
    background-color: #D8EAD6
`;

export const InfoContent = styled.p`
    font-size: 16px;
    margint-top: 0;
`;
