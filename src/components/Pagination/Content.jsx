import {
  BoxWrapper,
  Box,
  LinkBox,
  TextWrapper,
  IconWrapper,
} from "./Content.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export default function Content() {
  const ScholarShipData = [
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
  ];

  return (
    <BoxWrapper>
      {ScholarShipData.map((item) => {
        <>
          <Box key={item.id}>
            <TextWrapper>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </TextWrapper>
            <LinkBox>
              <Link to={`/scholarship/${item.scholarshipId}`}>자세히 보기</Link>
            </LinkBox>
          </Box>
          <IconWrapper>
            <FontAwesomeIcon icon={faBookmark} />
          </IconWrapper>
        </>;
      })}
    </BoxWrapper>
  );
}
