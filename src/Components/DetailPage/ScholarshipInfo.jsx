import React, { useState } from "react";
import { Container, TitleWrapper, Title, Summary, InfoWrapper, InfoBlock, Highlight, InfoTitle, InfoContent } from "./ScholarshipInfo.style";
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
        <Container>
            <TitleWrapper>
                <Title>{scholarship.name}</Title>
                <Summary>최대 {scholarship.amount} | {scholarship.applicationPeriod} | {scholarship.type}</Summary>
            </TitleWrapper>
            <InfoWrapper>
                <InfoBlock>
                    <InfoTitle><Highlight>선발기준 및 대상</Highlight></InfoTitle>
                    <InfoContent>{scholarship.criteria}</InfoContent>
                </InfoBlock>
                <InfoBlock>
                    <InfoTitle><Highlight>장학금액</Highlight></InfoTitle>
                    <InfoContent>최대 {scholarship.amount}</InfoContent>
                </InfoBlock>
                <InfoBlock>
                    <InfoTitle><Highlight>관련학과</Highlight></InfoTitle>
                    <InfoContent>{scholarship.department}</InfoContent>
                </InfoBlock>
                <InfoBlock>
                    <InfoTitle><Highlight>성적기준</Highlight></InfoTitle>
                    <InfoContent>{scholarship.criteria}</InfoContent>
                </InfoBlock>
                <InfoBlock>
                    <InfoTitle><Highlight>장학금성격</Highlight></InfoTitle>
                    <InfoContent>{scholarship.type}</InfoContent>
                </InfoBlock>
            </InfoWrapper>
        </Container>
    );
}

export default ScholarshipInfo;