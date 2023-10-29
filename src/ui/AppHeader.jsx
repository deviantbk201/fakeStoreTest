import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);

  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 1.2rem 4.8rem;
  gap: 6rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
const Logodiv = styled.div`
  justify-self: start;
`;
export default function AppHeader() {
  return (
    <StyledHeader>
      <Logodiv>
        <Logo />
      </Logodiv>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
