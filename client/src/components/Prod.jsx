import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f5fbfd;
`;

const Card = styled.div`
  width: 270px;
  overflow: hidden;
  text-align: center;
  margin: 15px 15px;
  border: 2px solid #0099ff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
  border-radius: 16px;
`;

const Image = styled.div`
  width: 230px;
  height: 230px;
  margin: 20px auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  font-size: 18px;
  padding: 0 25px;
  margin-bottom: 10px;
`;
const ProductPrice = styled.h4``;

const Btn = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #0099ff;
  border: 2px solid rgb(33, 33, 33);
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  font-size: 18px;
  transition: all 1s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const Prod = ({ item }) => {
  return (
    <Container>
      <Card>
        <Image>
          <Img src={item.img} alt="phone" />
        </Image>
        <ProductInfo>
          {/* Samsung Galaxy S22 Ultra 5G */}
          {item.title}
          <ProductPrice>Ksh {item.price}</ProductPrice>
        </ProductInfo>
        <Btn>
          <Button type="Button">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/product/${item._id}`}
            >
              Check Out
            </Link>
          </Button>
        </Btn>
      </Card>
    </Container>
  );
};

export default Prod;
