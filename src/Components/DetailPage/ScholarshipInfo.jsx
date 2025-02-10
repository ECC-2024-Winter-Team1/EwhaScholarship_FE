import React, {useState, useEffect} from "react";

function ScholarshipInfo({ scholarshipId }) {
    const [scholarship, setScholarship] = useState(null);

    useEffect(() => {
        if (scholarshipId) {
            fetch(`/api/scholarships/${scholarshipId}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "success" && data.data.length>0) {
                        setScholarship(data.data[0]);
                    }
                });
        }
    }, [scholarshipId]);

    return (
        <div>
            <h2>{scholarship.name}</h2>
            <p>최대 {scholarship.amount}원 | {scholarship.applicationPeriod} | {scholarship.type} </p>
            <div>
                <div>
                    <h3>선발기준 및 대상</h3>
                    <p>{scholarship.criteria}</p>
                </div>
                <div>
                    <h3>장학금액</h3>
                    <p>최대 {scholarship.amount}</p>
                </div>
                <div>
                    <h3>관련학과</h3>
                    <p>{scholarship.department}</p>
                </div>
                <div>
                    <h3>성적기준</h3>
                    <p>{scholarship.gpa}</p>
                </div>
                <div>
                    <h3>장학금성격</h3>
                    <p>{scholarship.type}</p>
                </div>
            </div>
        </div>
    );
}

export default ScholarshipInfo;