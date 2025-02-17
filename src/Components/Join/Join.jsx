import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    JoinContainer, JoinForm, JoinTitle, JoinSubtitle, 
    InputLabel, InputStyle, SelectGroup, SelectItem, 
    SelectLabel, SelectField, SubmitButton, Icon1, Icon2, InputStyle1
} from "./NewJoin.style";
import axios from "axios";

const NewJoin = () => {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const departmentRef = useRef(null);
    const yearRef = useRef(null);
    const gpaRef = useRef(null);
    const incomeLevelRef = useRef(null);

    const Departments = [
        { value: "인문과학대학", label: "인문과학대학" },
        { value: "사회과학대학", label: "사회과학대학" },
        { value: "자연과학대학", label: "자연과학대학" },
        { value: "(엘텍)공과대학", label: "(엘텍)공과대학" },
        { value: "음악대학", label: "음악대학" },
        { value: "조형예술대학", label: "조형예술대학" },
        { value: "사범대학", label: "사범대학" },
        { value: "경영대학", label: "경영대학" },
        { value: "신산업융합대학", label: "신산업융합대학" },
        { value: "의과대학", label: "의과대학" },
        { value: "간호대학", label: "간호대학" },
        { value: "약학대학", label: "약학대학" },
        { value: "스크랜튼대학", label: "스크랜튼대학" },
        { value: "인공지능대학", label: "인공지능대학" },
        { value: "호크마교양대학", label: "호크마교양대학" }
    ];

    const Years = [
        { value: "1", label: "1학년" },
        { value: "2", label: "2학년" },
        { value: "3", label: "3학년" },
        { value: "4", label: "4학년" },
    ];

    const IncomeLevels = [
        { value: "1", label: "1분위" },
        { value: "2", label: "2분위" },
        { value: "3", label: "3분위" },
        { value: "4", label: "4분위" },
        { value: "5", label: "5분위" },
        { value: "6", label: "6분위" },
        { value: "7", label: "7분위" },
        { value: "8", label: "8분위" },
        { value: "9", label: "9분위" },
        { value: "10", label: "10분위" },
    ];

    function onSubmit(e) {
        e.preventDefault();  
   
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const department = departmentRef.current.value;
        const year = yearRef.current.value;
        const gpa = gpaRef.current.value;
        const incomeLevel = incomeLevelRef.current.value;

        if (!username) {
            usernameRef.current.focus();
            return false;
        }
        if (!password) {
            passwordRef.current.focus();
            return false;
        }
        if (!incomeLevel) {
            incomeLevelRef.current.focus();
            return false;
        }

        axios.post("http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/auth/register", 
            {
                username,
                password,
                department,
                year,
                gpa,
                incomeLevel,
            }, 
            {
                headers: { 
                    "Content-Type": "application/json" 
                }
            }
        )

        .then(() => {
            alert("회원가입이 완료되었습니다.");
            navigate("/");  
        })

        .catch((error) => {
            let errorMessage = "회원가입 중 오류가 발생했습니다.";
        
            if (error.response?.data?.message?.includes("Duplicate entry")) {
                errorMessage = "아이디가 중복되었습니다. 다른 아이디를 사용해주세요.";
            } 
        
            alert(errorMessage);
            console.error("회원가입 오류", error);
        });
}

    return (
        <JoinContainer>
            <JoinForm>
                <JoinTitle>EWHA Scholar</JoinTitle>
                <JoinSubtitle>이화장학</JoinSubtitle>
                
                <SelectGroup>

                <SelectItem style={{ display: "flex", alignItems: "center" }}>
                        <Icon2 src="/profile.png" alt="profileIcon"/>
                        <InputLabel htmlFor="username">아이디</InputLabel>
                        <InputStyle1 
                            ref={usernameRef} 
                            type="text" 
                            id="form_username" 
                            name="form_username"
                        />
                </SelectItem>

                   <SelectItem>
                        <Icon2 src="/key.png" alt="keyIcon"/>
                        <InputLabel htmlFor="password">비밀번호</InputLabel>
                        <InputStyle1 ref={passwordRef} type="text" id="form_password" name="form_password" />
                   </SelectItem>

                    <SelectItem>
                        <Icon1 src="/book.png" alt="bookIcon"/>
                        <SelectLabel htmlFor="department">단과대학</SelectLabel>
                        <SelectField ref={departmentRef} id="form_department" name="form_department">
                            {Departments.map(({ value, label }) => (
                                <option key ={value} value={value}>
                                    {label}
                                </option> 
                             ))}
                        </SelectField>
                    </SelectItem>

                    <SelectItem>
                        <Icon1 src="/calender.png" alt="calenderIcon"/>
                        <SelectLabel htmlFor="year">학년</SelectLabel>
                        <SelectField ref={yearRef} id="form_year" name="form_year">
                            {Years.map(({ value, label }) => (
                                <option key ={value} value={value}>
                                    {label}
                                </option> 
                             ))}    
                        </SelectField>
                    </SelectItem>

                    <SelectItem>
                        <Icon1 src="/home.png" alt="homeIcon"/>
                        <SelectLabel htmlFor="incomeLevel">소득분위</SelectLabel>
                        <SelectField ref={incomeLevelRef} id="form_incomeLevel" name="form_incomeLevel">
                            {IncomeLevels.map(({ value, label }) => (
                                <option key ={value} value={value}>
                                    {label}
                                </option> 
                             ))} 
                        </SelectField>
                    </SelectItem>

                    <SelectItem>
                        <Icon1 src="/star.png" alt="Icon"/>
                        <SelectLabel htmlFor="gpa">학점</SelectLabel>
                        <InputStyle ref={gpaRef} type="number" id="form_grade" name="form_grade" placeholder="0.00" step="0.01" min="0" max="4.5" />
                   </SelectItem>

                </SelectGroup>

                <SubmitButton type="submit" onClick={onSubmit}>
                    회원가입
                </SubmitButton>
            </JoinForm>
        </JoinContainer>
    );
}; 
export default NewJoin;
