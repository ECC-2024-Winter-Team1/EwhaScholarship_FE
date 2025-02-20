import StyledHeader from "../Header/StyledHeader";
import ScholarshipInfo from "./ScholarshipInfo";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { scholarshipId } = useParams();

  return (
    <>
      <StyledHeader />
      <ScholarshipInfo />
      <ReviewForm scholarshipId={scholarshipId} />
      <ReviewList />;
    </>
  );
}

export default DetailPage;