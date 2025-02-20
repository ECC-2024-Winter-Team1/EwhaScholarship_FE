import React from "react";
import { useState } from "react";
import { Container, Title, TitleAndFilter, FilterLabel, DropDown, Number, ReviewCard, Content, Top, Name, Text, ProfileImage, Badge, Info, Pagination, PaginationButton } from "./ReviewList.style";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const dummies = [
    { reviewId: 1, isAwarded: true, applicationYear: 2023, semester: "1", content: "장학금 신청 과정이 간단했어요!" },
    { reviewId: 2, isAwarded: false, applicationYear: 2024, semester: "2", content: "선발 기준이 명확하지 않아서 아쉬웠어요." },
    { reviewId: 3, isAwarded: true, applicationYear: 2022, semester: "1", content: "받아서 학비 부담이 줄었어요!" },
    { reviewId: 4, isAwarded: false, applicationYear: 2021, semester: "2", content: "지원했지만 탈락해서 아쉬웠어요." },
    { reviewId: 5, isAwarded: true, applicationYear: 2020, semester: "1", content: "금액이 생각보다 많아서 만족했어요!" },
    { reviewId: 6, isAwarded: true, applicationYear: 2022, semester: "1", content: "성적이 조금 부족한가 싶었는데 괜찮았어요." },
    { reviewId: 7, isAwarded: false, applicationYear: 2024, semester: "1", content: "다음에 다시 신청하려고요.." },
    { reviewId: 8, isAwarded: true, applicationYear: 2020, semester: "2", content: "학점보단 면접이 더 중요한 것 같아요!" },
    { reviewId: 9, isAwarded: false, applicationYear: 2021, semester: "1", content: "왜 떨어졌는지 잘 모르겠어요ㅠㅠ" },
    { reviewId: 10, isAwarded: true, applicationYear: 2018, semester: "2", content: "지원 당시 학점은 X.XX였어요." },
];

function ReviewList() {

    const reviewsInOnePage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const [filterIsAwarded, setFilterIsAwarded] = useState("");
    const [filterApplicationYear, setFilterApplicationYear] = useState("");
    const [filterSemester, setFilterSemester] = useState("");

    const filteredReviews = dummies.filter((review) => {
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