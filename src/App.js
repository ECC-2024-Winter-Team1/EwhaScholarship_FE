import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage/DetailPage";
import Login from "./components/Login/Login";
import Join from "./components/Join/Join";
import BookMark from "./components/BookMark/BookMark";
import MainPage from "./components/Pagination/MainPage";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="scholarship/:scholarshipId" element={<DetailPage />} />
          <Route path="bookmarks" element={<BookMark />} />
          <Route path="info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
