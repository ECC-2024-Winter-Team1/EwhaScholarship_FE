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

export default function ShowPostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [bookmarks, setBookmarks] = useState([]);

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
    const Data = [
      {
        scholarshipId: 1,
        name: "이화미래설계",
        amount: "최대 400만원",
        applicationPeriod: "3월/9월",
        type: "학업보조비",
      },
      {
        scholarshipId: 2,
        name: "전공리더십",
        amount: "학과별 상이",
        applicationPeriod: "4월/10월",
        type: "학비감면",
      },
      {
        scholarshipId: 3,
        name: "이화복지",
        amount: "차등지급",
        applicationPeriod: "11월/5월",
        type: "학비감면",
      },
      {
        scholarshipId: 4,
        name: "등록금 옴부즈만",
        amount: "최대 400만원",
        applicationPeriod: "2월/8월",
        type: "학비감면",
      },
      {
        scholarshipId: 5,
        name: "이화미래설계",
        amount: 400,
        applicationPeriod: "3월/9월",
        type: "학업보조비",
      },
      {
        scholarshipId: 6,
        name: "전공리더십",
        amount: "학과별 상이",
        applicationPeriod: "4월/10월",
        type: "학비감면",
      },
      {
        scholarshipId: 7,
        name: "이화복지",
        amount: "차등지급",
        applicationPeriod: "11월/5월",
        type: "학비감면",
      },
      {
        scholarshipId: 8,
        name: "등록금 옴부즈만",
        amount: "최대 400만원",
        applicationPeriod: "2월/8월",
        type: "학비감면",
      },
    ];
    setPosts(Data);
  }, []);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
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
