import MainPage from "./Components/main/MainPage";
import StyledHeader from "./Components/Header/StyledHeader";
import ShowPostList from "./Components/Pagination/ShowPostList";

function App() {
  return (
    <>
      <StyledHeader />
      <MainPage />
      <ShowPostList />
    </>
  );
}

export default App;
