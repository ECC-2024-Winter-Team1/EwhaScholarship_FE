import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { Pagination } from "./Pagination";
import SearchBox from "../Main/SearchBox";
import GradeInput from "../Main/GradeInput";
import MainText from "../Main/MainText";
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
import { COMMON_API_URL, API_URL } from "../../consts";
import StyledHeader from "../Header/StyledHeader";
import {
  ToggleWrapper,
  MainTextContainer,
  StyledText,
} from "../Main/MainText.style";
import { ToggleSwitch } from "../Main/ToggleSwitch";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState({
    year: "",
    department: "",
    incomeLevel: "",
    gpa: "",
  });
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [firstPostIndex, setFirstPostIndex] = useState(0);
  const [lastPostIndex, setLastPostIndex] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);

  const handleToggleChange = (status) => {
    setIsToggled(status);
  };

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
    return isBookmarked;
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

      queryParams.append("page", currentPage - 1);
      queryParams.append("size", postsPerPage);

      const apiUrl = API_URL.SCHOLARSHIP;
      const url = `${apiUrl}?${queryParams.toString()}`;

      console.log("📡 API 요청 URL:", url);

      const data = await fetchApi(url, { method: "GET" });

      console.log("📢 백엔드 응답 데이터:", data);

      setPosts(data.content || []);
      setTotalElements(data.totalElements || 0);
      console.log("받아온 데이터:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isToggled) {
      const fetchUserData = async () => {
        const userData = await fetchApi(API_URL.CUSTOM_SCHOLARSHIP, {
          method: "GET",
        });

        if (userData) {
          setFilterOption({
            year: userData.year,
            department: userData.department,
            incomeLevel: userData.incomeLevel,
            gpa: userData.gpa,
          });
        }
      };

      fetchUserData();
    } else {
      setFilterOption({
        year: "",
        department: "",
        incomeLevel: "",
        gpa: "",
      });
    }
  }, [isToggled]);

  useEffect(() => {
    fetchScholarships();
    console.log("currentPage : ", currentPage);
  }, [search, filterOption, isToggled, currentPage]);

  useEffect(() => {
    setFirstPostIndex(0);
    setLastPostIndex(10);
    setCurrentPosts(posts.slice(firstPostIndex, lastPostIndex));
  }, [posts]);

  return (
    <>
      <StyledHeader />
      <MainContainer>
        <SearchBox search={setSearch} />
        <MainTextContainer>
          <StyledText>원하는 조건별로 검색하세요</StyledText>
          <ToggleWrapper>
            <StyledText>내 정보로 바로 검색하기</StyledText>
            <ToggleSwitch onToggleChange={handleToggleChange} />
          </ToggleWrapper>
        </MainTextContainer>
        <GradeInput setFilterOption={setFilterOption} />
        <Text>{totalElements} 개의 장학금 정보가 있어요</Text>

        <BoxWrapper>
          {currentPosts.map(
            ({
              scholarshipId,
              name,
              amount,
              applicationPeriod,
              type,
              isBookmarked,
            }) => (
              <ItemWrapper key={scholarshipId}>
                <Box>
                  <TextWrapper>
                    <h2>{name}</h2>
                    <p>{`${amount} | ${applicationPeriod} | ${type}`}</p>
                  </TextWrapper>
                  <LinkBox>
                    <Link to={`/scholarship/${scholarshipId}`}>
                      자세히 보기
                    </Link>
                  </LinkBox>
                </Box>
                <IconWrapper onClick={() => handleBookmarkClick(scholarshipId)}>
                  <FontAwesomeIcon
                    icon={
                      setBookmarkColor(scholarshipId)
                        ? solidBookmark
                        : regularBookmark
                    }
                    style={{ color: "#00462a" }}
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
    </>
  );
}
