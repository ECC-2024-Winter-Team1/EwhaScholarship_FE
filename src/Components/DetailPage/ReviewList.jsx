import React from "react";
import { useState, useEffect } from "react";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";
import { Container, Title, TitleAndFilter, FilterLabel, DropDown, Number, ReviewCard, Content, Top, Name, Text, ProfileImage, Badge, Info, Pagination, PaginationButton } from "./ReviewList.style";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ReviewList({ scholarshipId }) {

    const reviewsInOnePage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [reviews, setReviews] = useState([]);
    
    const [filterIsAwarded, setFilterIsAwarded] = useState("");
    const [filterApplicationYear, setFilterApplicationYear] = useState("");
    const [filterSemester, setFilterSemester] = useState("");

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${API_URL.SCHOLARSHIP}/${scholarshipId}/reviews`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer YOUR_JWT_TOKEN`,
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch reviews");
                }

                const result = await response.json();
                setReviews(result.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        if (scholarshipId) {
            fetchReviews();
        }
    }, []);

    const filteredReviews = reviews.filter((review) => {
        const findIsAwarded = filterIsAwarded === "" || (filterIsAwarded === "수혜함" && review.isAwarded) || (filterIsAwarded === "수혜 안함" && !review.isAwarded);
        const findApplicationYear = filterApplicationYear === "" || review.applicationYear.toString() === filterApplicationYear;
        const findSemester = filterSemester === "" || review.semester === filterSemester;
        
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
                    <Number
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
                {currentReviews.length > 0 && currentReviews.map((review) => (
                        <ReviewCard key={review.reviewId}>
                            <Content>
                                <ProfileImage src="/profileicon.jpg" alt="Profile" />
                                <Text>
                                    <Top>
                                        <Name>익명</Name>
                                        <Badge>
                                            {review.isAwarded ? (
                                                <FaCheckCircle size={16} />
                                            ) : (
                                                <FaTimesCircle size={16} />
                                            )}
                                            {review.isAwarded ? "수혜함" : "수혜 안함"}
                                        </Badge>
                                        <Badge>{review.applicationYear}-{review.semester}</Badge>
                                    </Top>
                                    <Info>{review.content}</Info>
                                </Text>
                            </Content>
                        </ReviewCard>
                    ))}
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