import React from "react";
import { mobile } from "../responsive";

import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: #fff;
  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #0099ff;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  outline: none;
  padding: 10px;
  font-size: 20px;
  ${mobile({ fontSize: "12px" })};
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 20px 15px;
  cursor: pointer;
  background: #0099ff;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.5s ease;
  &:hover {
    background: darkblue;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <b>
              <em>PRIVACY POLICY</em>
            </b>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
