import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Nav = styled.nav`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  /* top and bottom, left and right */
  padding: 1.25rem 0px;
`;
const NavbarLeft = styled.div`
  font-size: 2.125rem;
  font-weight: bold;
`;
const LogoText = styled.span``;
const LogoDot = styled.span`
  color: #1dbf73;
`;
const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125rem;
  font-weight: 500;
`;
const LinkBusiness = styled.span``;
const LinkExplore = styled.span``;
const LinkLanguage = styled.span``;
const LinkCurrency = styled.span``;
const LinkSeller = styled.span``;
const LinkSignIn = styled.span``;
const NavJoinButton = styled.button``;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavbarLeft>
          <LogoText>Fiverr</LogoText>
          <LogoDot>.</LogoDot>
        </NavbarLeft>
        <NavbarRight>
          <LinkBusiness>Fiverr Business</LinkBusiness>
          <LinkExplore>Explore</LinkExplore>
          <LinkLanguage>English</LinkLanguage>
          <LinkCurrency>€ Eur</LinkCurrency>
          <LinkSeller>Become a Seller</LinkSeller>
          <LinkSignIn>Sign in</LinkSignIn>
          <NavJoinButton>Join</NavJoinButton>
        </NavbarRight>
      </Nav>
    </Container>
  );
};

export default Navbar;
