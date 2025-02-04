import styled from "styled-components";

const StyledSelect = styled.select`
  border-radius: 10px;
  border: 2px solid #00462a;
  font-size: 20px;
  padding: 10px 10px 10px 10px;
  width: 200px;
`;

export default function DropDown() {
  return (
    <>
      <StyledSelect name="selectedYear">
        <option value="none" hidden>
          학년
        </option>
        <option value="freshman">1학년</option>
        <option value="sophomore">2학년</option>
        <option value="junior">3학년</option>
        <option value="senior">4학년</option>
      </StyledSelect>
      <StyledSelect name="selectedCollege">
        <option value="none" hidden>
          단과대학
        </option>
        <option value="humanities">인문과학대학</option>
        <option value="social">사회과학대학</option>
        <option value="natural">자연과학대학</option>
        <option value="engineering">공과대학</option>
        <option value="music">음악대학</option>
        <option value="arts">조형예술대학</option>
        <option value="education">사범대학</option>
        <option value="business">경영대학</option>
        <option value="convergence">신산업융합대학</option>
        <option value="medical">의과대학</option>
        <option value="nursing">간호대학</option>
        <option value="pharmacy">약학대학</option>
        <option value="scranton">스크랜튼대학</option>
        <option value="ai">인공지능대학</option>
        <option value="hokma">호크마교양대학</option>
      </StyledSelect>
      <StyledSelect name="selectedIncome">
        <option value="none" hidden>
          소득분위
        </option>
        <option value="0">0분위</option>
        <option value="1">1분위</option>
        <option value="2">2분위</option>
        <option value="3">3분위</option>
        <option value="4">4분위</option>
        <option value="5">5분위</option>
        <option value="6">6분위</option>
        <option value="7">7분위</option>
        <option value="8">8분위</option>
        <option value="9">9분위</option>
        <option value="10">10분위</option>
      </StyledSelect>
    </>
  );
}
