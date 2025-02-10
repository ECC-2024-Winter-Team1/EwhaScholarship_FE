import MainPage from "./components/Main/MainPage";
import StyledHeader from "./components/Header/StyledHeader";
import ShowPostList from "./components/Pagination/ShowPostList";

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
