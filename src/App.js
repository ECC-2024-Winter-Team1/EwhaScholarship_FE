import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import StyledHeader from "./Components/Header/StyledHeader";
import ShowingPagination from "./components/Pagination/ShowingPagination";
import BookMark from "./components/BookMark/BookMark";

function App() {
  return (
    <>
      <StyledHeader />
      <ShowingPagination />
      {/* <BookMark /> */}
    </>
  );
}

export default App;
