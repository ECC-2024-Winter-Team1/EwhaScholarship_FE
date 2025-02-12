import {
  BoxWrapper,
  Box,
  LinkBox,
  TextWrapper,
  IconWrapper,
  ItemWrapper,
} from "./Content.style";
import { Pagination } from "./Pagination";
import { useEffect, useState } from "react";
import { Text } from "./Pagination.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import SearchBox from "../Main/SearchBox";
import GradeInput from "../Main/GradeInput";
import MainPage from "../Main/MainPage";

export default function ShowPostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filterOption, setFilterOption] = useState({
    year: "",
    college: "",
    income: "",
    grade: "",
  });

  const handleBookMark = ({
    scholarshipId,
    name,
    amount,
    applicationPeriod,
    type,
  }) => {
    let updatedBookmarks = [];

    let found = false;

    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].scholarshipId === scholarshipId) {
        found = true;
      } else {
        updatedBookmarks.push(bookmarks[i]);
      }
    }

    if (!found) {
      updatedBookmarks = updatedBookmarks.concat({
        scholarshipId,
        name,
        amount,
        applicationPeriod,
        type,
      });
    }

    setBookmarks(updatedBookmarks);
  };

  // useEffect(() => {
  //   const fetchScholarships = async () => {
  //     try {
  //       const response = await fetch("");
  //       const data = await response.json();
  //       setPosts(data.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchScholarships();
  // }, [searchKeyWord, filterOption]);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <SearchBox searchKeyword={setSearchKeyWord} />
      <MainPage />
      <GradeInput setFilterOption={setFilterOption} />
      <Text>{posts.length} 개의 장학금 정보가 있어요</Text>

      <BoxWrapper>
        {currentPosts.map(
          ({ scholarshipId, name, amount, applicationPeriod, type }) => (
            <ItemWrapper>
              <Box key={scholarshipId}>
                <TextWrapper>
                  <h2>{name}</h2>
                  <p>{`${amount} | ${applicationPeriod} | ${type}`}</p>
                </TextWrapper>
                <LinkBox>
                  <a href="#">자세히 보기</a>
                </LinkBox>
              </Box>
              <IconWrapper
                onClick={() =>
                  handleBookMark({
                    scholarshipId,
                    name,
                    amount,
                    applicationPeriod,
                    type,
                  })
                }
              >
                <FontAwesomeIcon icon={faBookmark} />
              </IconWrapper>
            </ItemWrapper>
          )
        )}
      </BoxWrapper>

      <footer>
        <Pagination
          postsNum={posts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </footer>
    </>
  );
}
