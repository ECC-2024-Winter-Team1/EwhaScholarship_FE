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
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filterOption, setFilterOption] = useState({
    year: "",
    college: "",
    income: "",
    grade: "",
  });
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const handleBookmarkClick = async (scholarshipId) => {
    try {
      let newIds = [];
      let found = false;

      for (let i = 0; i < bookmarkedIds.length; i++) {
        if (bookmarkedIds[i] === scholarshipId) {
          found = true;
        } else {
          newIds[newIds.length] = bookmarkedIds[i];
        }
      }

      if (found) {
        // await fetch("", { method: "DELETE" });
        console.log("북마크 삭제 성공!");
      } else {
        newIds[newIds.length] = scholarshipId;
        // await fetch("", { method: "POST" });
        console.log("북마크 등록 성공!");
      }

      setBookmarkedIds(newIds);
    } catch (error) {
      console.log(error);
    }
  };

  const setBookmarkColor = (scholarshipId) => {
    let isBookmarked = false;
    for (let i = 0; i < bookmarkedIds.length; i++) {
      if (bookmarkedIds[i] === scholarshipId) {
        isBookmarked = true;
        break;
      }
    }
    return isBookmarked ? "rgb(10, 141, 88)" : "black";
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
      <SearchBox searchKeyword={setSearchKeyWord} />
      <MainPage />
      <GradeInput setFilterOption={setFilterOption} />
      <Text>{posts.length} 개의 장학금 정보가 있어요</Text>

      <BoxWrapper>
        {currentPosts.map(
          ({ scholarshipId, name, amount, applicationPeriod, type }) => (
            <ItemWrapper key={scholarshipId}>
              <Box>
                <TextWrapper>
                  <h2>{name}</h2>
                  <p>{`${amount} | ${applicationPeriod} | ${type}`}</p>
                </TextWrapper>
                <LinkBox>
                  <a href="#">자세히 보기</a>
                </LinkBox>
              </Box>
              <IconWrapper onClick={() => handleBookmarkClick(scholarshipId)}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    color: setBookmarkColor(scholarshipId),
                  }}
                />
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
