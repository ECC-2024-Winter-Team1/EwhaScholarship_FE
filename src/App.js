import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetailPage from "./Components/DetailPage/DetailPage";
import Login from "./Components/login/Login";
import Join from "./Components/Join/Join";
import BookMark from "./Components/BookMark/BookMark";
import MainPage from "./Components/Pagination/ShowingPagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="scholarship/:scholarshipId" element={<DetailPage />} />
        <Route path="bookmarks" element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
