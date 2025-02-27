import { useState } from "react";
import { Button, ButtonWrapper } from "./Pagination.style";
export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);
  const pagesPerGroup = 5;
  const totalPageGroup = Math.ceil(totalPages / pagesPerGroup);
  const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const startPageIndex = pagesPerGroup * currentPageGroup + 1;
  const endPageIndex = Math.min(startPageIndex + pagesPerGroup - 1, totalPages);

  for (let i = startPageIndex; i <= endPageIndex; i++) {
    pageList.push(i);
  }

  const goToNextPageGroup = () => {
    if (currentPageGroup < totalPageGroup - 1) {
      setCurrentPageGroup(currentPageGroup + 1);
      setCurrentPage(startPageIndex + pagesPerGroup);
    }
  };

  const goToPrevPageGroup = () => {
    if (currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      setCurrentPage(startPageIndex - pagesPerGroup);
    }
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <ButtonWrapper>
      <Button onClick={goToPrevPageGroup} disabled={currentPageGroup === 0}>
        {"<"}
      </Button>

      {pageList.map((page) => (
        <Button
          key={page}
          onClick={() => setCurrentPage(page)}
          $selected={currentPage === page}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={goToNextPageGroup}
        disabled={currentPageGroup === totalPageGroup - 1}
      >
        {">"}
      </Button>
    </ButtonWrapper>
  );
}
