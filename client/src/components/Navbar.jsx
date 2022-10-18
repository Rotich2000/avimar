import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userRedux";
import image from "../images/Avimar.png";
import kenya from "../images/madeinkenya.png";

const Container = styled.div`
  height: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })};
`;
const Kenya = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 100% 0%;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })};
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  ${mobile({ flex: 1 })};
`;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;
const SearchContainer = styled.div`
  border: 0.5px solid #0099ff;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  ${mobile({ marginLeft: "5px" })};
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 24px;
  width: 100%;
  ${mobile({ width: "50px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;
const MenuItem = styled.div`
  color: #000;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })};
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo src={image} alt="logo" />
          </Link>
          <Link to="/products/kenya" style={{ textDecoration: "none" }}>
            <Kenya src={kenya} alt="logo" />
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            {/* <Language>ENG</Language> */}
            <Input placeholder="search" />
            <SearchIcon
              style={{ color: "#0099ff", cursor: "pointer", fontSize: "24px" }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <Link to="register" style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          {user ? (
            <MenuItem onClick={() => dispatch(logOut())}>LOG OUT</MenuItem>
          ) : (
            <Link to="login" style={{ textDecoration: "none" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
