import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";

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
      setScholarship(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(scholarship, scholarshipId);

  useEffect(() => {
    fetchScholarship();
  }, []);

  return (
    <div>
      <h2>{scholarship?.name}</h2>
      <p>
        최대 {scholarship?.amount} | {scholarship?.applicationPeriod} |{" "}
        {scholarship?.type}
      </p>
      <div>
        <div>
          <h3>선발기준 및 대상</h3>
          <p>{scholarship?.criteria}</p>
        </div>
        <div>
          <h3>장학금액</h3>
          <p>최대 {scholarship?.amount}</p>
        </div>
        <div>
          <h3>관련학과</h3>
          <p>{scholarship?.department}</p>
        </div>
        <div>
          <h3>성적기준</h3>
          <p>{scholarship?.criteria}</p>
        </div>
        <div>
          <h3>장학금성격</h3>
          <p>{scholarship?.type}</p>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipInfo;
