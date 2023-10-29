import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;
const StyledAppLayout = styled.main`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <AppHeader />
      <AppSidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

// import { Outlet } from "react-router-dom";
// import AppSidebar from "./AppSidebar";
// import AppHeader from "./AppHeader";
// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vh;
// `;

// const Main = styled.main`
//   background-color: lemonchiffon;
//   padding: 4rem 4.8rem 6.4rem;
//   background-color: var(--color-grey-50);
//   overflow-y: scroll;
// `;
// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

// export default function AppLayout() {
//   return (
//     <StyledAppLayout>
//       <AppHeader />
//       <AppSidebar />
//       <Main>
//         <Container>
//           <Outlet />
//         </Container>
//       </Main>
//     </StyledAppLayout>
//   );
// }
