import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from "./Components/Main/MainPage";
import DetailPage from "./Components/detailpage/DetailPage";
import Login from "./Components/Login/Login";
import Join from "./Components/Join/Join";
import BookMark from "./Components/BookMark/BookMark";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="main" element={<MainPage />} />
        <Route path="scholarship/:scholarshipId" element={<DetailPage />} />
        <Route path="bookmarks" element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
