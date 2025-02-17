import { HeaderWrapper, Title, Link } from "./Header.style";

export default function StyledHeader() {
  return (
    <div>
      <HeaderWrapper>
        <Title>
          <div>Ewha scholar</div>
          <div>이화장학</div>
        </Title>
        <nav>
          <Link href="#">
            <span>홈</span>
          </Link>
          <Link href="#">
            <span>북마크 목록</span>
          </Link>
          <Link href="#">마이페이지</Link>
        </nav>
      </HeaderWrapper>
    </div>
  );
}
