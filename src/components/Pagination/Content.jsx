import { BoxWrapper, Box } from "./Content.style";

export default function Content() {
  return (
    <BoxWrapper>
      <Box>
        <h2>이화미래설계</h2>
        <p>최대 400만원 | 3월/9월 | 학업보조비</p>
      </Box>
      <Box>
        <h2>전공리더십</h2>
        <p>학과별 상이 | 4월/10월 | 학비감면</p>
      </Box>
      <Box>
        <h2>이화복지</h2>
        <p>차등지급 | 11월/5월 | 학비감면</p>
      </Box>
      <Box>
        <h2>등록금 옴부즈만</h2>
        <p>최대 400만원 | 2월/8월 | 학비감면</p>
      </Box>
    </BoxWrapper>
  );
}
