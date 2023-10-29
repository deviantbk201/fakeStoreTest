import { useLogin } from "./useLogin";

import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading: isLoggingIn } = useLogin();

  function handleSubmit() {}

  return (
    <Row type="vertical" $centered>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button>Login</Button>
        </FormRowVertical>
      </Form>
      <Heading as="h4">or</Heading>
      <Button
        $variation="primary"
        $size="large"
        onClick={login}
        disabled={isLoggingIn}
      >
        Sign in with <strong>Google</strong>
      </Button>
    </Row>
  );
}

export default LoginForm;
