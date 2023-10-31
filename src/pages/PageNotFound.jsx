import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading as="h1"> Error!! Page Not Found</Heading>
    </StyledPageNotFound>
  );
}
