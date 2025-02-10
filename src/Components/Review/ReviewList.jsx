import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchReviews = async () => {
      try {
        const response = await axios.get("서버주소넣을공간", {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        setReviews(response.data);
      } catch (error) {
        alert("리뷰 정보 불러오기에 실패했습니다");
      }
    };
    fetchReviews();
  }, []);

  const handleDeleteReview = (reviewId) => {
    setReviews(reviews.filter((review) => review.reviewId !== reviewId));
  };

  return (
    <>
      {reviews.map((review) => (
        <ReviewCard key={review.reviewId} review={review} onDelete={handleDeleteReview} />
      ))}
    </>
  );
};

export default ReviewList;
