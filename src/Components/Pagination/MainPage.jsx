import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Pagination } from "./Pagination";
import SearchBox from "../Main/SearchBox";
import GradeInput from "../Main/GradeInput";
import MainText from "../Main/MainText";
import { API_URL } from "../../consts";
import { fetchApi } from "../../utils";
import { Text, MainContainer, PaginationWrapper } from "./Pagination.style";
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
import MainText from "../Main/MainText";
import { COMMON_API_URL, API_URL } from "../../consts";
import { fetchApi } from "../../utils";
import StyledHeader from "../Header/StyledHeader";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState({
    year: "",
    department: "",
    incomeLevel: "",
    gpa: "",
  });
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

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

      console.log(found, scholarshipId);
      if (found) {
        await fetchApi(`${COMMON_API_URL}/bookmarks/${scholarshipId}`, {
          method: "DELETE",
        });
        console.log("북마크 삭제 성공!");
      } else {
        newIds[newIds.length] = scholarshipId;
        await fetchApi(`${COMMON_API_URL}/bookmarks`, {
          method: "POST",
          body: JSON.stringify({ scholarshipId }),
        });
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

  const fetchScholarships = async () => {
    try {
      const queryParams = new URLSearchParams();

      if (search) queryParams.append("search", search);
      if (filterOption.year) queryParams.append("year", filterOption.year);
      if (filterOption.department)
        queryParams.append("department", filterOption.department);
      if (filterOption.incomeLevel)
        queryParams.append("incomeLevel", filterOption.incomeLevel);
      if (filterOption.gpa) queryParams.append("gpa", filterOption.gpa);

      const url = `${API_URL.SCHOLARSHIP}?${queryParams.toString()}`;
      const data = await fetchApi(url, { method: "GET" });
      setPosts(data.content);
      setTotalElements(data.totalElements);
      console.log("받아온 데이터:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchScholarships();
  }, [search, filterOption]);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <MainContainer>
      <StyledHeader />
      <SearchBox search={setSearch} />
      <MainText />
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

      <PaginationWrapper>
        <Pagination
          postsNum={totalElements}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </PaginationWrapper>
    </MainContainer>
  );
}
