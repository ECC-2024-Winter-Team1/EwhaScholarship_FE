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

export default function ShowPostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const handleBookMark = (item) => {
    const updatedBookmarks = [];

    let found = false;

    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].scholarshipId === item.scholarshipId) {
        found = true;
      } else {
        updatedBookmarks.push(bookmarks[i]);
      }
    }

    if (!found) {
      updatedBookmarks = updatedBookmarks.concat(item);
    }

    setBookmarks(updatedBookmarks);
  };

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        // const response = await fetch("");
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchScholarships();
  }, [searchKeyWord]);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <SearchBox searchKeyword={setSearchKeyWord} />
      <Text>{posts.length} 개의 장학금 정보가 있어요</Text>

      <BoxWrapper>
        {currentPosts.map((item) => (
          <ItemWrapper>
            <Box key={item.scholarshipId}>
              <TextWrapper>
                <h2>{item.name}</h2>
                <p>{`${item.amount} | ${item.applicationPeriod} | ${item.type}`}</p>
              </TextWrapper>
              <LinkBox>
                <a href="#">자세히 보기</a>
              </LinkBox>
            </Box>
            <IconWrapper onClick={() => handleBookMark(item)}>
              <FontAwesomeIcon icon={faBookmark} />
            </IconWrapper>
          </ItemWrapper>
        ))}
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
