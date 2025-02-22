import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, TitleContainer, Title, ShortInfo, ListContainer, ListTitle, Highlight, ListContent } from "./ScholarshipInfo.style";

const ScholarshipInfo = () => {
  const { scholarshipId } = useParams();
  const [scholarship, setScholarship] = useState(null);

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchScholarship();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>{scholarship?.name}</Title>
        <ShortInfo>
          {scholarship?.amount} | {scholarship?.applicationPeriod} |{" "}
          {scholarship?.type}
        </ShortInfo>
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
