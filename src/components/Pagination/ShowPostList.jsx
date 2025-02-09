import { BoxWrapper, Box, LinkBox, TextWrapper } from "./Content.style";
import { Pagination } from "./Pagination";
import { useEffect, useState } from "react";
import { Text } from "./Pagination.style";

export default function ShowPostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const Data = [
      {
        id: 1,
        title: "이화미래설계",
        description: "최대 400만원 | 3월/9월 | 학업보조비",
      },
      {
        id: 2,
        title: "전공리더십",
        description: "학과별 상이 | 4월/10월 | 학비감면",
      },
      {
        id: 3,
        title: "이화복지",
        description: "차등지급 | 11월/5월 | 학비감면",
      },
      {
        id: 4,
        title: "등록금 옴부즈만",
        description: "최대 400만원 | 2월/8월 | 학비감면",
      },
      { id: 5, title: "기타 장학금", description: "기타 상세 내용" },
      { id: 6, title: "해외연수 지원", description: "국제 경험을 위한 지원" },
      {
        id: 7,
        title: "이화미래설계",
        description: "최대 400만원 | 3월/9월 | 학업보조비",
      },
      {
        id: 8,
        title: "전공리더십",
        description: "학과별 상이 | 4월/10월 | 학비감면",
      },
      {
        id: 9,
        title: "이화복지",
        description: "차등지급 | 11월/5월 | 학비감면",
      },
      {
        id: 10,
        title: "등록금 옴부즈만",
        description: "최대 400만원 | 2월/8월 | 학비감면",
      },
      { id: 11, title: "기타 장학금", description: "기타 상세 내용" },
      { id: 12, title: "해외연수 지원", description: "국제 경험을 위한 지원" },
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
          <Box key={item.id}>
            <TextWrapper>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </TextWrapper>
            <LinkBox>
              <a href="#">자세히 보기</a>
            </LinkBox>
          </Box>
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
