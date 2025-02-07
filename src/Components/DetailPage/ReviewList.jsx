import React from "react";
import { useState } from "react";

const dummies = [
    { reviewId: 1, isAwarded: true, applicationYear: 2023, semester: "1학기", content: "장학금 신청 과정이 간단했어요!" },
    { reviewId: 2, isAwarded: false, applicationYear: 2024, semester: "2학기", content: "선발 기준이 명확하지 않아서 아쉬웠어요." },
    { reviewId: 3, isAwarded: true, applicationYear: 2022, semester: "1학기", content: "받아서 학비 부담이 줄었어요!" },
    { reviewId: 4, isAwarded: false, applicationYear: 2021, semester: "2학기", content: "지원했지만 탈락해서 아쉬웠어요." },
    { reviewId: 5, isAwarded: true, applicationYear: 2020, semester: "1학기", content: "금액이 생각보다 많아서 만족했어요!" },
    { reviewId: 6, isAwarded: true, applicationYear: 2022, semester: "1학기", content: "성적이 조금 부족한가 싶었는데 괜찮았어요." },
    { reviewId: 7, isAwarded: false, applicationYear: 2024, semester: "1학기", content: "다음에 다시 신청하려고요.." },
    { reviewId: 8, isAwarded: true, applicationYear: 2020, semester: "2학기", content: "학점보단 면접이 더 중요한 것 같아요!" },
    { reviewId: 9, isAwarded: false, applicationYear: 2021, semester: "1학기", content: "왜 떨어졌는지 잘 모르겠어요ㅠㅠ" },
    { reviewId: 10, isAwarded: true, applicationYear: 2018, semester: "2학기", content: "지원 당시 학점은 X.XX였어요." },
];

const ReviewList = () => {

    const reviewsInOnePage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const [filterIsAwarded, setFilterIsAwarded] = useState("");
    const [filterApplicationYear, setFilterApplicationYear] = useState("");
    const [filterSemester, setFilterSemester] = useState("");

    const filteredReviews = dummies.filter((review) => {
        const findIsAwarded =
            filterIsAwarded === "" ||
            (filterIsAwarded === "수혜함" && review.isAwarded) ||
            (filterIsAwarded === "수혜 안함" && !review.isAwarded);

        const findApplicationYear = filterApplicationYear === "" || review.applicationYear.toString() === filterApplicationYear;
        
        const findSemester = filterSemester === "" || `${review.applicationYear}-${review.semester}` === filterSemester;
        
        return findIsAwarded && findSemester;
    });
    
    const indexOfLastReview = currentPage * reviewsInOnePage;
    const indexOfFirstReview = indexOfLastReview - reviewsInOnePage;
    const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (indexOfLastReview < filteredReviews.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h2>학생들의 리뷰</h2>

            <div>
                <label>
                    수혜 여부
                    <select value={filterIsAwarded} onChange={(e) => setFilterIsAwarded(e.target.value)}>
                        <option value="">전체</option>
                        <option value="수혜함">수혜함</option>
                        <option value="수혜 안함">수혜 안함</option>
                    </select>
                </label>

                <label>
                    신청 연도
                    <input
                        type="number"
                        placeholder="신청 연도를 입력하세요"
                        value={filterApplicationYear}
                        onChange={(e) => setFilterApplicationYear(e.target.value)}
                    />
                </label>

                <label>
                    학기
                    <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
                    <option value="">전체</option>
                        <option value="1학기">1학기</option>
                        <option value="2학기">2학기</option>
                    </select>
                </label>
            </div>

            <div>
                {currentReviews.length > 0 && currentReviews.map((review) => (
                        <div key={review.reviewId}>
                            <p><strong>익명</strong></p>
                            <p>{review.isAwarded ? "수혜함" : "수혜 안함"}</p>
                            <p>{review.applicationYear}-{review.semester}</p>
                            <p>{review.content}</p>
                        </div>
                    ))}
            </div>

            <div>
                <button onClick={previousPage} disabled={currentPage === 1}>이전</button>
                <span> {currentPage} </span>
                <button onClick={nextPage} disabled={indexOfLastReview >= filteredReviews.length}>다음</button>
            </div>
        </div>
    );
};

export default ReviewList;