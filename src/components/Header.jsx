import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding-top: 3px;
  padding-left: 15%;
  padding-right: 15%;
  background-color: white;
  color: darkgreen;
  border-bottom: 5px solid darkgreen;
  max-width: 1800px;
  margin: 0 auto;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  & span:first-child {
    font-size: 22px;
    font-weight: normal;
  }

  & span:last-child {
    font-size: 36px;
  }
`;

const NavLinks = styled.div`
  a {
    margin: 0 20px;
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 550;
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }

  a:not(:last-child)::after {
    content: "|";
    margin-left: 20px;
    color: black;
  }

  a:hover {
    color: darkgreen;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar>
        <HeaderTitle>
          <span>EWHA Scholar</span>
          <br />
          <span>이화장학</span>
        </HeaderTitle>
        <NavLinks>
          <a href="/">홈</a>
          <a href="/bookmark">북마크 목록</a>
          <a href="/myPage">마이페이지</a>
        </NavLinks>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
