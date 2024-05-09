import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const loginUser = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
