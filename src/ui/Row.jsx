import styled, { css } from "styled-components";

// const StyledRow = styled.div``;

// function Row({ children }) {
//   return <StyledRow>{children}</StyledRow>;
// }

// export default Row;
const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: space-between;
    `}
      ${(props) =>
    props.$centered === true &&
    props.type === "vertical" &&
    css`
      align-items: center;
    `}
      gap: 1.8rem;
`;
export default Row;
