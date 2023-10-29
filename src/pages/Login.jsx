import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--color-grey-100);
`;
export default function Login() {
  return (
    <LoginLayout>
      <Logo $main />
      <Container>
        <p>Login using Email or Password</p>
        <LoginForm />
      </Container>
    </LoginLayout>
  );
}
