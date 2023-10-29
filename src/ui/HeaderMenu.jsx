import styled from "styled-components";
import Logout from "../features/authentication/Logout";

import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

export default function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      {/* <li> */}
      {/* <ButtonIcon onClick={() => navigate("/")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li> */}
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
