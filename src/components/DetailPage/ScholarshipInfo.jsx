import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, TitleContainer, Title, ShortInfo, BookmarkIcon, ListContainer, ListTitle, Highlight, ListContent } from "./ScholarshipInfo.style";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const ScholarshipInfo = () => {
  const { scholarshipId } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          alert("로그인을 먼저 해주세요.");
          return;
        }

        const response = await axios.get(
          `http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/scholarships/${Number(scholarshipId)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setScholarship(response.data.data);
        setIsBookmarked(response.data.data.isBookmarked);
      } catch (error) {
        console.error(error);
      }
    };
    fetchScholarship();
  }, []);

  const handleBookmark = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인을 먼저 해주세요.");
        return;
      }

      if (isBookmarked) {
        await axios.delete(
          `http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/bookmarks/${Number(scholarshipId)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setIsBookmarked(false);
      } else {
        await axios.post(
          "http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/bookmarks",
          { scholarshipId: Number(scholarshipId) },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{scholarship?.name}</Title>
        <ShortInfo>
          {scholarship?.amount} | {scholarship?.applicationPeriod} |{" "}
          {scholarship?.type}
        </ShortInfo>
        <BookmarkIcon onClick={handleBookmark}>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkIcon>
      </TitleContainer>
      <ListContainer>
        <ListTitle><Highlight>선발기준 및 대상</Highlight></ListTitle>
        <ListContent>{scholarship?.criteria}</ListContent>
      </ListContainer>
      <ListContainer>
        <ListTitle><Highlight>장학금액</Highlight></ListTitle>
        <ListContent>{scholarship?.amount}</ListContent>
      </ListContainer>
      <ListContainer>
        <ListTitle><Highlight>지급 시기</Highlight></ListTitle>
        <ListContent>{scholarship?.paymentPeriod}</ListContent>
      </ListContainer>
        <ListContainer>
        <ListTitle><Highlight>장학금 성격</Highlight></ListTitle>
        <ListContent>{scholarship?.type}</ListContent>
      </ListContainer>
    </Container>
  );
}

export default ScholarshipInfo;
