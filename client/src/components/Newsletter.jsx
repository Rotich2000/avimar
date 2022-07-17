import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #0099ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px" })};
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.5);
  ${mobile({ width: "80%" })};
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  flex: 8;
  padding-left: 20px;
  ${mobile({ fontSize: "12px" })};
`;
const Button = styled.button`
  flex: 1;
  background: black;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Timely updates from our favourite products</Description>
      <InputContainer>
        <Input placeholder="Enter email address..." type="email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
