import React, { useState, useEffect } from "react";
import { Container, Title, TitleAndFilter, FilterContainer, FilterLabel, DropDown, StyledNumber, ReviewCard, Content, Top, Name, Text, ProfileImage, Badge, Info, Pagination, PaginationButton, Actions, RightTop, EditContainer, EditRow, MiniSelect, MiniInput, MiniReview, MiniButton, ButtonContainer } from "./ReviewList.style";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ReviewList() {
    const { scholarshipId } = useParams();
    const reviewsInOnePage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [userId, setUserId] = useState(null);
    
    const [editingReviewId, setEditingReviewId] = useState(null);
    const [updatedContent, setEditContent] = useState("");
    const [updatedIsAwarded, setUpdatedIsAwarded] = useState("");
    const [updatedApplicationYear, setUpdatedApplicationYear] = useState("");
    const [updatedApplicationSemester, setUpdatedApplicationSemester] = useState("");

    const [filterIsAwarded, setFilterIsAwarded] = useState("");
    const [filterApplicationYear, setFilterApplicationYear] = useState("");
    const [filterSemester, setFilterSemester] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded.sub);
        }
    }, []);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const token = localStorage.getItem("token"); 
                if (!token) {
                    alert("로그인을 먼저 해주세요.");
                    return;
                }
                const response = await axios.get(`http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/scholarships/${Number(scholarshipId)}/reviews`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                setReviews(response.data.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        if (scholarshipId) {
            fetchReviews();
        }
    }, [scholarshipId]);

    const handleDelete = async (reviewId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("로그인을 먼저 해주세요.");
            return;
        }

        try {
            await axios.delete(`http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/${reviewId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            setReviews(reviews.filter(review => review.id !== reviewId));
            alert("리뷰 삭제 성공!");
        } catch (error) {
            console.error("Error deleting review:", error);
            alert("리뷰 삭제 실패");
        }
    };

    const handleEdit = (review) => {
        setEditingReviewId(review.id);
        setEditContent(review.content);
        setUpdatedIsAwarded(review.isAwarded ? "수혜함" : "수혜 안함");
        setUpdatedApplicationYear(review.applicationYear);
        setUpdatedApplicationSemester(review.applicationSemester);
    };

    const handleSave = async (reviewId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("로그인을 먼저 해주세요.");
            return;
        }
    
        const updatedReview = {
            id: reviewId,
            scholarshipId,
            isAwarded: updatedIsAwarded === "수혜함",
            applicationYear: Number(updatedApplicationYear),
            applicationSemester: Number(updatedApplicationSemester),
            content: updatedContent,
        };
    
        try {
            const response = await axios.patch(
                `http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/${reviewId}`,
                updatedReview,
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            if (response.data && response.data.content) {
                setEditContent(response.data.content);
            }
    
            setEditingReviewId(null); // 편집 모드 종료
            alert("리뷰 수정 성공!");
        } catch (error) {
            alert("리뷰 수정에 실패했습니다.");
        }
    };

    const filteredReviews = reviews.filter((review) => {
        const findIsAwarded = filterIsAwarded === "" || (filterIsAwarded === "수혜함" && review.isAwarded) || (filterIsAwarded === "수혜 안함" && !review.isAwarded);
        const findApplicationYear = filterApplicationYear === "" || review.applicationYear.toString() === filterApplicationYear;
        const findSemester = filterSemester === "" || review.applicationSemester === filterSemester;
        
        return findIsAwarded && findApplicationYear && findSemester;
    });
    
    const indexOfLastReview = currentPage * reviewsInOnePage;
    const indexOfFirstReview = indexOfLastReview - reviewsInOnePage;
    const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

    function previousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        if (indexOfLastReview < filteredReviews.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <Container>
            <TitleAndFilter>
                <Title>학생들의 리뷰</Title>
                <FilterContainer>
                    <FilterLabel>
                        수혜 여부
                        <DropDown value={filterIsAwarded} onChange={(e) => setFilterIsAwarded(e.target.value)}>
                            <option value="">전체</option>
                            <option value="수혜함">수혜함</option>
                            <option value="수혜 안함">수혜 안함</option>
                        </DropDown>
                    </FilterLabel>

                    <FilterLabel>
                        신청 연도
                        <StyledNumber
                            type="number"
                            placeholder="신청 연도"
                            value={filterApplicationYear}
                            onChange={(e) => setFilterApplicationYear(e.target.value)}
                        />
                    </FilterLabel>

                    <FilterLabel>
                        학기
                        <DropDown value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
                            <option value="">전체</option>
                            <option value="1">1학기</option>
                            <option value="2">2학기</option>
                        </DropDown>
                    </FilterLabel>
                </FilterContainer>
            </TitleAndFilter>

            <div>
                {currentReviews.length > 0 ? currentReviews.map((review) => (
                    <ReviewCard key={review.id}>
                        <Content>
                            <ProfileImage src="/profileicon.jpg" alt="Profile" />
                            <Text>
                                <Top>
                                    <Name>익명</Name>
                                    <Badge>
                                        {review.isAwarded ? <FaCheckCircle size={16} /> : <FaTimesCircle size={16} />}
                                        {review.isAwarded ? "수혜함" : "수혜 안함"}
                                    </Badge>
                                    <Badge>{review.applicationYear}-{review.applicationSemester}</Badge>
                                </Top>
                                <Info>{review.content}</Info>
                            </Text>
                        </Content>
                        {review.userId === userId && (
                            <RightTop>
                                {editingReviewId === review.id ? (
                                    <EditContainer>
                                        <EditRow>
                                            <label>수혜 여부</label>
                                            <MiniSelect value={updatedIsAwarded} onChange={(e) => setUpdatedIsAwarded(e.target.value)}>
                                                <option value="수혜함">수혜함</option>
                                                <option value="수혜 안함">수혜 안함</option>
                                            </MiniSelect>
                                        
                                            <label>신청 연도</label>
                                            <MiniInput
                                                type="number"
                                                value={updatedApplicationYear}
                                                onChange={(e) => setUpdatedApplicationYear(e.target.value)}
                                            />
                                        
                                            <label>신청 학기</label>
                                            <MiniSelect value={updatedApplicationSemester} onChange={(e) => setUpdatedApplicationSemester(e.target.value)}>
                                                <option value="1">1학기</option>
                                                <option value="2">2학기</option>
                                            </MiniSelect>
                                        </EditRow>
                                        <div>
                                            <label>리뷰 내용</label>
                                            <MiniReview
                                                type="text"
                                                value={updatedContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                            />
                                        </div>
                                        <ButtonContainer>
                                            <MiniButton onClick={() => handleSave(review.id)}>저장</MiniButton>
                                            <MiniButton onClick={() => setEditingReviewId(null)}>취소</MiniButton>
                                        </ButtonContainer>
                                    </EditContainer>
                                ) : (
                                    <>
                                        <Actions onClick={() => handleEdit(review)}>수정</Actions>
                                        <Actions onClick={() => handleDelete(review.id)}>삭제</Actions>
                                    </>
                                )}
                            </RightTop>
                        )}
                    </ReviewCard>
                )) : <p>리뷰가 없습니다.</p>}
            </div>

            <Pagination>
                <PaginationButton onClick={previousPage} disabled={currentPage === 1}>&lt;</PaginationButton>
                <span> {currentPage} </span>
                <PaginationButton onClick={nextPage} disabled={indexOfLastReview >= filteredReviews.length}>&gt;</PaginationButton>
            </Pagination>
        </Container>
    );
}

export default ReviewList;