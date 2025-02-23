import styled from "styled-components"

export const Container = styled.div`
    margin-top: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const TitleAndFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 0px;
    margin-left: 250px;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 0px;
    margin-right: 160px;
`;

export const FilterLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const DropDown = styled.select`
    border-radius: 20px;
    padding: 8px;
    width: 100px;
    cursor: pointer;
    border: 2px solid #00462A;

    option{
        font-size: 14px;
        color: #333333; 
    }
`;

export const StyledNumber = styled.input`
    border-radius: 20px;
    padding: 8px;
    width: 100px;
    border: 2px solid #00462A;
`;

export const ReviewCard = styled.div`
    width: 100%;
    width: 919px;
    padding: 25px;
    border-radius: 20px;
    background: #F0F7F4;
    margin-left: 250px;
    margin-bottom: 20px;
    margin-top: 30px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    position: relative;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 0px;
    left: 125px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 60px;
`;

export const Name = styled.p`
    font-size: 22px;
`;

export const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 12px;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
`;

export const Text = styled.div`
    align-items: center;
    margin-left: 100px;
`;

export const Badge = styled.span`
    background: #00462A;
    color: white;
    padding: 3px 14px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
`;

export const Info = styled.p`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: -20px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const PaginationButton = styled.button`
    font-size: 16px;
    background-color: #F0F7F4;
    color: #00462A;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:disabled {
        background-color: #D3D3D3;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #00462A;
        color: white;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const RightTop = styled.span`
    position: absolute;
    top: 20px;
    right: 40px;
    display: flex;
    gap: 8px;
`;

export const Actions = styled.span`
    background: none;
    border: none;
    color: gray;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`;