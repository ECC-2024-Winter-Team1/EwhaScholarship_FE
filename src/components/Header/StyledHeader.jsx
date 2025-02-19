import { HeaderWrapper, Title, StyledLink } from "./Header.style";
import { Link } from "react-router-dom";

export default function StyledHeader() {
  return (
    <div>
      <HeaderWrapper>
        <Title>
          <div>Ewha scholar</div>
          <div>이화장학</div>
        </Title>
        <nav>
          <Link to="/">
            <StyledLink>
              <span>홈</span>
            </StyledLink>
          </Link>
          <Link to="/bookmarks">
            <StyledLink>
              <span>북마크 목록</span>
            </StyledLink>
          </Link>
          <Link to="/info">
            <StyledLink>마이페이지</StyledLink>
          </Link>
        </nav>
      </HeaderWrapper>
    </div>
  );
}
