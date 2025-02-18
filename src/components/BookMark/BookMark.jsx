import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  BoxWrapper,
  Box,
  LinkBox,
  TextWrapper,
  Text,
  IconWrapper,
  ItemWrapper,
} from "../Pagination/Content.style";

export default function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch(
        "http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/bookmarks",
      );
      const data = await response.json();
      setBookmarks(data);
    } catch (error) {
      console.log("북마크 목록이 없습니다.");
    }
  };

  // const data = [
  //   {
  //     scholarshipId: 1,
  //     name: "이화미래설계",
  //     amount: "최대 400만원",
  //     applicationPeriod: "3월/9월",
  //     type: "학업보조비",
  //   },
  //   {
  //     scholarshipId: 2,
  //     name: "전공리더십",
  //     amount: "학과별 상이",
  //     applicationPeriod: "4월/10월",
  //     type: "학비감면",
  //   },
  // ];

  // setBookmarks(data);

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
              ),
            )}
          </BoxWrapper>
        </>
      ) : (
        <p>북마크한 장학금이 없습니다.</p>
      )}
    </>
  );
}
