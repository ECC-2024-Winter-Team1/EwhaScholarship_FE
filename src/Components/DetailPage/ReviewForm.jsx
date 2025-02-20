import { Container, ReviewSectionName, Button, ReviewFormArea, Conditions, IfReward, Checkbox, Number, DropDown, ReviewContent } from "./ReviewForm.style";
import { useState } from "react";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";

const ReviewForm = ({ scholarshipId }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [received, setReceived] = useState(false);
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = async () => {
        if (!received || !year || !semester || !review) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        const applicationGrade = semester === "1학기" ? 1 : 2;
        const requestBody = {
            scholarshipId,
            isAwarded: received,
            applicationYear: parseInt(year, 10),
            applicationGrade,
            content: review,
        };

        setLoading(true);
        setMessage("");

        try {
            const data = await fetchApi(`${API_URL.SCHOLARSHIP}/${scholarshipId}/reviews`, {
                method: "POST",
                body: JSON.stringify(requestBody),
            });

            if (data) {
                setMessage("리뷰 등록 성공!");
                setReceived(false);  // 상태 초기화
                setYear("");
                setSemester("");
                setReview("");
            } else {
                setMessage("리뷰 등록 실패");
            }
        } catch (error) {
            setMessage("서버 요청 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <ReviewSectionName>리뷰쓰기</ReviewSectionName>
            <ReviewFormArea>
                <Conditions>
                    <IfReward>
                        <Checkbox
                            type="checkbox"
                            checked={received}
                            onChange={() => setReceived(!received)}
                        />
                        수혜여부
                    </IfReward>

                    <Number
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="신청 연도"
                    />

                    <DropDown value={semester} onChange={(e) => setSemester(e.target.value)}>
                        <option value="">신청 학기</option>
                        <option value="1학기">1학기</option>
                        <option value="2학기">2학기</option>
                    </DropDown>
                </Conditions>

                <ReviewContent>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="장학금 신청 과정이 어떠했나요? &#13;&#10;입금 금액 및 시기, 선발 기준, 팁 등 장학금에 관한 정보와 경험을 자유롭게 남겨주세요."
                    />
                </ReviewContent>

                <Button onClick={handleSubmit} disabled={loading}>{loading ? "제출 중..." : "리뷰 작성하기"}</Button>
                {message && <p>{message}</p>}
            </ReviewFormArea>
        </Container>
    );
};

export default ReviewForm;