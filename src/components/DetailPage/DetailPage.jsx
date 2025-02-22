import StyledHeader from "../Header/StyledHeader";
import ScholarshipInfo from "./ScholarshipInfo";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function DetailPage() {
  return (
    <>
      <StyledHeader />
      <ScholarshipInfo />
      <ReviewForm />
      <ReviewList />;
    </>
  );
}

export default DetailPage;