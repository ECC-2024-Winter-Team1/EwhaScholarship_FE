import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Container, Title } from "./ReviewList.style"; 

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/my", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReviews(response.data.data || []); 
      } catch (error) {
        alert("리뷰 정보 불러오기에 실패했습니다");
      }
    };

    fetchReviews();
  }, []);

  const handleDeleteReview = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <Container>
      <Title>내 리뷰 보기</Title>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard key={review.id} review={review} onDelete={handleDeleteReview} />
        ))
      ) : (
        <p>등록된 리뷰가 없습니다.</p>
      )}
    </Container>
  );
};

export default ReviewList;
