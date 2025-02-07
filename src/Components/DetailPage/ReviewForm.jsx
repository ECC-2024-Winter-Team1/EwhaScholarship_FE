import { Button, ReviewFormArea, Conditions, IfReward, ReviewContent } from "./ReviewForm.style";
import { useState } from "react";

const ReviewForm = () => {
    const [received, setReceived] = useState(false);
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [review, setReview] = useState("");

    const Submission = () => {
        console.log({ received, year, semester, review });
    };

    return (
        <div>
            <h2>리뷰쓰기</h2>
            <ReviewFormArea>
                <Conditions>
                    <IfReward>
                        <input
                            type="checkbox"
                            checked={received}
                            onChange={() => setReceived(!received)}
                        />
                        수혜 여부
                    </IfReward>

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
                </Conditions>

                <ReviewContent>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="장학금 신청 과정이 어떠했나요? &#13;&#10;입금 금액 및 시기, 선발 기준, 팁 등 장학금에 관한 정보와 경험을 자유롭게 남겨주세요."
                    />
                </ReviewContent>

                <Button onClick={Submission}>리뷰 작성하기</Button>

            </ReviewFormArea>
        </div>
    );
};

export default ReviewForm;