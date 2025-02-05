import { HeaderWrapper, Title, Link, NavBar } from "./Header.style";

export default function StyledHeader() {
  return (
    <div>
      <HeaderWrapper>
        <Title>
          Ewha scholar
          <br />
          이화장학
        </Title>
        <NavBar>
          <Link href="#">홈</Link>
          <Link href="#">북마크 목록</Link>
          <Link href="#">마이페이지</Link>
        </NavBar>
      </HeaderWrapper>
    </div>
  );
}
