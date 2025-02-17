import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";
import { Container, Title, ShortInfo, ListContainer, ListTitle, Highlight, ListContent } from "./ScholarshipInfo.style";

function ScholarshipInfo() {
  const { scholarshipId } = useParams();
  const [scholarship, setScholarship] = useState(null);

  const fetchScholarship = async () => {
    try {
      const response = await fetchApi(`${API_URL.SCHOLARSHIP}`, {
        method: "GET",
        params: {
          scholarshipId,
        },
      });
      const data = await response.json();
      setScholarship(data.content[0]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(scholarship, scholarshipId);

  useEffect(() => {
    fetchScholarship();
  }, []);

  return (
    <Container>
      <Title>{scholarship?.name}</Title>
      <ShortInfo>
        최대 {scholarship?.amount} | {scholarship?.applicationPeriod} |{" "}
        {scholarship?.type}
      </ShortInfo>
      <div>
        <ListContainer>
        <ListTitle><Highlight>선발기준 및 대상</Highlight></ListTitle>
          <ListContent>{scholarship?.criteria}</ListContent>
        </ListContainer>
        <ListContainer>
          <ListTitle><Highlight>장학금액</Highlight></ListTitle>
          <ListContent>최대 {scholarship?.amount}</ListContent>
        </ListContainer>
        <ListContainer>
          <ListTitle><Highlight>관련학과</Highlight></ListTitle>
          <ListContent>{scholarship?.department}</ListContent>
        </ListContainer>
        <ListContainer>
          <ListTitle><Highlight>성적기준</Highlight></ListTitle>
          <ListContent>{scholarship?.criteria}</ListContent>
        </ListContainer>
        <ListContainer>
          <ListTitle><Highlight>장학금성격</Highlight></ListTitle>
          <ListContent>{scholarship?.type}</ListContent>
        </ListContainer>
      </div>
    </Container>
  );
}

export default ScholarshipInfo;
