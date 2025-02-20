import { useEffect, useState } from "react";
import {
  BoxWrapper,
  Box,
  LinkBox,
  TextWrapper,
  Text,
  IconWrapper,
  ItemWrapper,
} from "../Pagination/Content.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { COMMON_API_URL, API_URL } from "../../consts";
import { fetchApi } from "../../utils";
import StyledHeader from "../Header/StyledHeader";

export default function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const data = await fetchApi(API_URL.BOOKMARK, {
        method: "GET",
      });
      setBookmarks(data);
    } catch (error) {
      console.log("북마크 목록이 없습니다.");
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const handleBookmarkClick = async (scholarshipId) => {
    try {
      await fetchApi(`${COMMON_API_URL}/bookmarks/${scholarshipId}`, {
        method: "DELETE",
      });

      let updatedBookmarks = [];

      for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].scholarshipId != scholarshipId) {
          updatedBookmarks[updatedBookmarks.length] = bookmarks[i];
        }
      }

      setBookmarks(updatedBookmarks);
    } catch (error) {
      console.log("북마크 삭제 실패:", error);
    }
  };

  return (
    <>
      <StyledHeader />
      {bookmarks.length > 0 ? (
        <>
          <Text>{bookmarks.length}개의 북마크한 장학금이 있어요</Text>
          <BoxWrapper>
            {bookmarks.map(
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
                  <IconWrapper
                    onClick={() => handleBookmarkClick(scholarshipId)}
                  >
                    <FontAwesomeIcon
                      icon={solidBookmark}
                      style={{
                        color: "#00462a",
                      }}
                    />
                  </IconWrapper>
                </ItemWrapper>
              )
            )}
          </BoxWrapper>
        </>
      ) : (
        <Text>북마크한 장학금이 없습니다.</Text>
      )}
    </>
  );
}
