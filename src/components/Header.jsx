import React from "react";

const Header = () => {
  return (
    <header
      style={{
        paddingTop: "3px",
        paddingLeft: "15%",
        paddingRight: "15%",
        backgroundColor: "white",
        color: "darkgreen",
        borderBottom: "5px solid darkgreen",
        maxWidth: "1800px",
        margin: "0 auto",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>
          <span style={{ fontSize: "22px", fontWeight: "normal" }}>
            EWHA Scholar
          </span>
          <br />
          <span style={{ fontSize: "36px" }}>이화장학</span>
        </h1>
        <div>
          <a
            href="/"
            style={{
              margin: "0 20px",
              color: "black",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 550,
            }}
          >
            홈
          </a>
          |
          <a
            href="/about"
            style={{
              margin: "0 20px",
              color: "black",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 550,
            }}
          >
            북마크 목록
          </a>
          |
          <a
            href="/contact"
            style={{
              margin: "0 20px",
              color: "black",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 550,
            }}
          >
            마이페이지
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
