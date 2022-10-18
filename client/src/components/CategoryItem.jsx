import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #0099ff;
  margin-bottom: 20px;
  background: #fff;
  padding: 10px 10px;
  border: 1px solid #0099ff;
  border-radius: 10px;
  ${mobile({ fontSize: "20px" })};
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #0099ff;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
