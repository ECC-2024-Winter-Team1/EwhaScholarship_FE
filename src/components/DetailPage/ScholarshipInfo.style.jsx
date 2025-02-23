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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 56px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

export const ShortInfo = styled.div`
    font-size: 24px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: #888888;
    margin-left: 10px;
    margin-top: 8px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const BookmarkIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 48px;
    color: #264E36;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const ListTitle = styled.h3`
    font-size: 32px;
    font-weight: bold;
  
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Highlight = styled.span`
    background-color: #D8EAD6;
    padding: 2px 5px;
    border-radius: 3px;
`;

export const ListContent = styled.p`
    font-size: 24px;
    line-height: 1.5;
    color: #333333;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
