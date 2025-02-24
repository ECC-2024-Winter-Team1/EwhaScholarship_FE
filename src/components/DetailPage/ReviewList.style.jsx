import styled from "styled-components"

export const Container = styled.div`
    max-width: 919px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const TitleAndFilter = styled.div`
    max-width: 919px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 0px;
`;

export const Title = styled.h2`
    font-size: 44px;
    font-weight: normal;
    margin-bottom: 0px;
    font-family: 'Gowun Batang', serif;
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: "Pretendard", sans-serif;
`;

export const FilterLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: "Pretendard", sans-serif;
`;

export const DropDown = styled.select`
    border-radius: 20px;
    padding: 8px;
    width: 100px;
    cursor: pointer;
    border: 2px solid #00462A;
    font-family: "Pretendard", sans-serif;

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
    font-family: "Pretendard", sans-serif;
`;

export const ReviewCard = styled.div`
    width: 100%;
    width: 919px;
    padding: 25px;
    border-radius: 20px;
    background: #F0F7F4;
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
    font-family: "Pretendard", sans-serif;
`;

export const Name = styled.p`
    font-size: 22px;
    font-family: "Pretendard", sans-serif;
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
    font-family: "Pretendard", sans-serif;
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

export const EditContainer = styled.div`
    background: #F0F7F4;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid #00462A;
`;

export const EditRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
`;

export const MiniSelect = styled.select`
    border-radius: 20px;
    cursor: pointer;
    border: 2px solid #00462A;
    padding: 4px 8px; 
    font-size: 14px; 
    width: 100px; 
    font-family: "Pretendard", sans-serif;
`;

export const MiniInput = styled.input`
    padding: 4px 8px;
    font-size: 14px;
    width: 70px;
    border-radius: 20px;
    border: 2px solid #00462A;
    font-family: "Pretendard", sans-serif;
`;

export const MiniButton = styled.button`
    padding: 6px 10px;
    font-size: 14px;
    min-width: 50px;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    font-family: "Pretendard", sans-serif;
`;

export const MiniReview = styled.input`
    width: 80%; // 가로를 전체로 설정
    height: 60%; // 원하는 높이로 설정
    padding: 10px; // 여백 추가
    border: 1px solid #ccc; // 테두리 색상
    border-radius: 15px; // 모서리 둥글게
    font-size: 16px; // 글자 크기
    margin-left: 5px;
    font-family: "Pretendard", sans-serif;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center; 
    margin-top: 10px; 
`;

export const StyledLabel = styled.label`
    font-family: "Pretendard", sans-serif;
`;