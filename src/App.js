<<<<<<< HEAD
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
=======
import ReviewForm from "./Components/DetailPage/ReviewForm";
import ReviewList from "./Components/DetailPage/ReviewList";

function App() {
  return (
    <div>
      <header>
      </header>
        <ReviewForm />
        <ReviewList />
    </div>
>>>>>>> d0b42ef (fix: App.js 초기 내용 삭제)
  );
}

export default App;
