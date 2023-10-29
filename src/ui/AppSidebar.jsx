import styled from "styled-components";
import MainNav from "./MainNav";

const StyledAppSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 4rem;
`;

export default function AppSidebar() {
  return (
    <StyledAppSidebar>
      <MainNav />
    </StyledAppSidebar>
  );
}

// import styled from "styled-components";
// import Logo from "./Logo";
// import MainNav from "./MainNav";
// // import Uploader from "../data/Uploader";
// const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 4rem;
//   border-right: 1px solid var(--color-grey-100);
//   grid-row: 1 /-1;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

// export default function AppSidebar() {
//   return (
//     <StyledSidebar>
//       <Logo />
//       <MainNav />
//       {/* <Uploader /> */}
//     </StyledSidebar>
//   );
// }
