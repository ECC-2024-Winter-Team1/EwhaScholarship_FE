import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage/DetailPage";
import Login from "./Components/Login/Login";
import Join from "./Components/Join/Join";
import BookMark from "./Components/BookMark/BookMark";
import MainPage from "./components/Pagination/MainPage";
import Info from "./Components/Info/Info";

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
