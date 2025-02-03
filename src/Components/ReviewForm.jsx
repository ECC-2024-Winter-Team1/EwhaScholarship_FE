import React from "react";
import { useState } from "react";

const ReviewForm = () => {
    const [received, setReceived] = useState(false);
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [review, setReview] = useState("");

    const Submission = () => {
        console.log({ received, year, semester, review});
    };

    return (
        <div>
            <h2>리뷰쓰기</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={received}
                        onChange={() => setReceived(!received)}
                    />
                    수혜 여부
                </label>

                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="신청 연도를 입력해주세요"
                />

                <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                    <option value="">신청 학기</option>
                    <option value="1학기">1학기</option>
                    <option value="2학기">2학기</option>
                </select>

                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="리뷰를 남겨주세요"
                />

                <button onClick={Submission}>리뷰 작성하기</button>
            </div>
        </div>
    );
};

export default ReviewForm;