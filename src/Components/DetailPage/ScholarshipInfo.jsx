import React, { useState } from "react";

const ScholarshipInfo = () => {
    const scholarship = {
      name: "이화미래설계",
      amount: "400만원",
      applicationPeriod: "3월/9월",
      department: "각 대학 관련부서",
      criteria: "5~7급 등급을 보유한 자로서 미래설계에 대한 계획과 의지가 있는 학생",
      type: "일반보조비",
      academicCriteria: "직전학기 2.0 이상"
    };

    return (
        <div>
            <h2>{scholarship.name}</h2>
            <p>최대 {scholarship.amount} | {scholarship.applicationPeriod} | {scholarship.type} </p>
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
                    <p>{scholarship.criteria}</p>
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