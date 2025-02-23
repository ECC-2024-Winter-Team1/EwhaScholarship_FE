import React, { useState, useEffect } from "react";
import { Container, Title, TitleAndFilter, FilterLabel, DropDown, StyledNumber, ReviewCard, Content, Top, Name, Text, ProfileImage, Badge, Info, Pagination, PaginationButton, Actions, RightTop } from "./ReviewList.style";
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

        const reviewToUpdate = reviews.find((review) => review.id === reviewId);
        if (!reviewToUpdate) {
            alert("리뷰를 찾을 수 없습니다.");
            return;
        }

        try {
            const isAwardedBoolean = updatedIsAwarded === "수혜함";  

            await axios.put(`http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/${reviewId}`, {
                id: reviewId,
                scholarshipId: reviewToUpdate.scholarshipId,
                isAwarded: isAwardedBoolean,
                applicationYear: updatedApplicationYear,
                applicationSemester: updatedApplicationSemester,
                content: updatedContent,
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            setReviews(reviews.map(review => 
                review.id === reviewId ? { 
                    ...review, 
                    isAwarded: updatedIsAwarded === "수혜함",
                    applicationYear: updatedApplicationYear,
                    applicationSemester: updatedApplicationSemester,
                    content: updatedContent 
                } : review
            ));
            setEditingReviewId(null);
            alert("리뷰 수정 성공!");
        } catch (error) {
            console.error("Error updating review:", error);
            alert("리뷰 수정 실패");
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
                                    <>
                                        <div>
                                            <label>수혜 여부</label>
                                            <DropDown value={updatedIsAwarded} onChange={(e) => setUpdatedIsAwarded(e.target.value)}>
                                                <option value="수혜함">수혜함</option>
                                                <option value="수혜 안함">수혜 안함</option>
                                            </DropDown>
                                        </div>
                                        <div>
                                            <label>신청 연도</label>
                                            <StyledNumber
                                                type="number"
                                                value={updatedApplicationYear}
                                                onChange={(e) => setUpdatedApplicationYear(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label>신청 학기</label>
                                            <DropDown value={updatedApplicationSemester} onChange={(e) => setUpdatedApplicationSemester(e.target.value)}>
                                                <option value="1">1학기</option>
                                                <option value="2">2학기</option>
                                            </DropDown>
                                        </div>
                                        <div>
                                            <label>리뷰 내용</label>
                                            <input
                                                type="text"
                                                value={updatedContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                            />
                                        </div>
                                        <button onClick={() => handleSave(review.id)}>저장</button>
                                        <button onClick={() => setEditingReviewId(null)}>취소</button>
                                    </>
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