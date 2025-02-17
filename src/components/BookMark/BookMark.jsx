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
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { API_URL } from "../../consts";
import { fetchApi } from "../../utils";

export default function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const response = await fetchApi(API_URL.BOOKMARK, {
        method: "GET",
      });
      const data = await response.json();
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
      // await fetch("", {method: "DELETE",});

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

  const setBookmarkColor = (scholarshipId) => {
    return "rgb(10, 141, 88)";
  };

  return (
    <>
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
        </>
      ) : (
        <p>북마크한 장학금이 없습니다.</p>
      )}
    </>
  );
}
