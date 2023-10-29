import styled, { css } from "styled-components";

const StyledLogo = styled.h1`
  text-align: center;
  font-family: "Monoton", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: var(--color-brand-500);
  ${(props) =>
    props.$main === true &&
    css`
      border-bottom: 1px double var(--color-brand-800);
    `};
  &:hover {
    ${(props) =>
      props.$main === true &&
      css`
        transform: scale(1.1);
        border-bottom: none;
      `}
  }
`;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

export default function Logo({ $main }) {
  // const { isDarkMode } = useDarkMode();
  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo $main={$main}>
      {/* <Img src={src} alt="Logo" /> */} FAKESTORE ?
    </StyledLogo>
  );
}
