import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;
const ContentList = styled.li`
  cursor: pointer;
  margin-right: 20px;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.5s ease;
  color: gray;
  &:hover {
    color: #0099ff;
  }
`;

const Dropdown = styled.div`
  position: relative;
  &:hover > div {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
  &:hover > li {
    color: #0099ff;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 0.25rem);
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
  z-index: 100;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 235px;
`;

const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const DropdownHeading = styled.h1`
  font-size: 22px;
  text-decoration: underline;
`;
const DropdownLinks = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.5s ease;
  color: gray;
  &:hover {
    color: #0099ff;
`;
const Image = styled.img`
  flex: 1;
  height: 300px;
  object-fit: cover;
`;

const Links = () => {
  return (
    <Container>
      <Wrapper>
        <ContentList>Home</ContentList>
        <ContentList>Saved</ContentList>
        <Dropdown length="-89">
          <ContentList>Electronics</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">
                Cell phones and accessories
              </DropdownLinks>
              <DropdownLinks href="#">Video games and consoles</DropdownLinks>
              <DropdownLinks href="#">Computers and tablets</DropdownLinks>
              <DropdownLinks href="#">Cameras and photos</DropdownLinks>
              <DropdownLinks href="#">Camera drones</DropdownLinks>
              <DropdownLinks href="#">Asian Brands</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Apple</DropdownLinks>
              <DropdownLinks href="#">Samsung</DropdownLinks>
              <DropdownLinks href="#">Xiaomi</DropdownLinks>
              <DropdownLinks href="#">
                Portable audio and headphones
              </DropdownLinks>
              <DropdownLinks href="#">Smart watches</DropdownLinks>
              <DropdownLinks href="#">Deals</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Fashion</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Footwear</DropdownLinks>
              <DropdownLinks href="#">Women's clothing</DropdownLinks>
              <DropdownLinks href="#">Footwear for women</DropdownLinks>
              <DropdownLinks href="#">Clothes for men</DropdownLinks>
              <DropdownLinks href="#">Men's footwear</DropdownLinks>
              <DropdownLinks href="#">Watches</DropdownLinks>
              <DropdownLinks href="#">Jewelry</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Accessories for men</DropdownLinks>
              <DropdownLinks href="#">Accessories for women</DropdownLinks>
              <DropdownLinks href="#">Bags and wallets for women</DropdownLinks>
              <DropdownLinks href="#">Mens sunglasses</DropdownLinks>
              <DropdownLinks href="#">Womens sunglasess</DropdownLinks>
              <DropdownLinks href="#">Sneakers</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Health & Beauty</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Beauty</DropdownLinks>
              <DropdownLinks href="#">Makeup</DropdownLinks>
              <DropdownLinks href="#">Health</DropdownLinks>
              <DropdownLinks href="#">K-Beauty</DropdownLinks>
              <DropdownLinks href="#">Manicure and pedicure</DropdownLinks>
              <DropdownLinks href="#">Hair products</DropdownLinks>
              <DropdownLinks href="#">Skin products</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">
                Vitamins and food supplements
              </DropdownLinks>
              <DropdownLinks href="#">Shaving and waxing</DropdownLinks>
              <DropdownLinks href="#">Bath and personal hygiene</DropdownLinks>
              <DropdownLinks href="#">Oral hygiene</DropdownLinks>
              <DropdownLinks href="#">Massagers</DropdownLinks>
              <DropdownLinks href="#">Deals</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Home & Garden</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">
                Workshop Tools and Equipment
              </DropdownLinks>
              <DropdownLinks href="#">Patio, garden and outdoors</DropdownLinks>
              <DropdownLinks href="#">Home improvement</DropdownLinks>
              <DropdownLinks href="#">Kitchen, dining and bar</DropdownLinks>
              <DropdownLinks href="#">Lamps, lights and fans</DropdownLinks>
              <DropdownLinks href="#">Interior decoration</DropdownLinks>
              <DropdownLinks href="#">Home organization</DropdownLinks>
              <DropdownLinks href="#">Home appliances</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Toys</DropdownLinks>
              <DropdownLinks href="#">Pets</DropdownLinks>
              <DropdownLinks href="#">Crafts</DropdownLinks>
              <DropdownLinks href="#">Art supplies</DropdownLinks>
              <DropdownLinks href="#">Musical instruments</DropdownLinks>
              <DropdownLinks href="#">Jewelry and beads</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Sports</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Cycling</DropdownLinks>
              <DropdownLinks href="#">Fitness, running and yoga</DropdownLinks>
              <DropdownLinks href="#">Fitness Tech</DropdownLinks>
              <DropdownLinks href="#">Fishing</DropdownLinks>
              <DropdownLinks href="#">Camping</DropdownLinks>
              <DropdownLinks href="#">Scooters</DropdownLinks>
              <DropdownLinks href="#">Team sports</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Watersports</DropdownLinks>
              <DropdownLinks href="#">Winter sports</DropdownLinks>
              <DropdownLinks href="#">Box and MMA</DropdownLinks>
              <DropdownLinks href="#">Swimming</DropdownLinks>
              <DropdownLinks href="#">GPS & Running Watches</DropdownLinks>
              <DropdownLinks href="#">Garmin</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Collectibles and Art</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Collectibles</DropdownLinks>
              <DropdownLinks href="#">Art</DropdownLinks>
              <DropdownLinks href="#">Action figures</DropdownLinks>
              <DropdownLinks href="#">Cartoon characters</DropdownLinks>
              <DropdownLinks href="#">Movie and TV characters</DropdownLinks>
              <DropdownLinks href="#">Diecast</DropdownLinks>
              <DropdownLinks href="#">Musical memorabilia</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Sports memorabilia</DropdownLinks>
              <DropdownLinks href="#">Trading card games</DropdownLinks>
              <DropdownLinks href="#">Antiques</DropdownLinks>
              <DropdownLinks href="#">Comics</DropdownLinks>
              <DropdownLinks href="#">Funko pop</DropdownLinks>
              <DropdownLinks href="#">Deals</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Industrial equipment</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Dental healthcare</DropdownLinks>
              <DropdownLinks href="#">
                Electronic equipment and supplies
              </DropdownLinks>
              <DropdownLinks href="#">
                Metallurgy and manufacturing
              </DropdownLinks>
              <DropdownLinks href="#">
                Motors and industrial automation
              </DropdownLinks>
              <DropdownLinks href="#">Heavy equipment parts</DropdownLinks>
              <DropdownLinks href="#">Light industrial tools</DropdownLinks>
              <DropdownLinks href="#">
                Inspection, measurement and testing equipment
              </DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Packing and shipping</DropdownLinks>
              <DropdownLinks href="#">
                Office supplies and equipment
              </DropdownLinks>
              <DropdownLinks href="#">Printing and graphic arts</DropdownLinks>
              <DropdownLinks href="#">
                Restaurants and food service
              </DropdownLinks>
              <DropdownLinks href="#">Maintenance and safety</DropdownLinks>
              <DropdownLinks href="#">Retail and services</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <ContentList>Motors</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownHeading>Most Popular Categories</DropdownHeading>
              <DropdownLinks href="#">Auto and truck parts</DropdownLinks>
              <DropdownLinks href="#">Tools and supplies</DropdownLinks>
              <DropdownLinks href="#">Turbo chargers</DropdownLinks>
              <DropdownLinks href="#">Clothing and merchandise</DropdownLinks>
              <DropdownLinks href="#">Shock absorbers</DropdownLinks>
              <DropdownLinks href="#">Electronic and GPS</DropdownLinks>
              <DropdownLinks href="#">Car Care and Detailing</DropdownLinks>
              <DropdownLinks href="#">Vintage pieces</DropdownLinks>
            </DropdownItems>
            <DropdownItems>
              <DropdownHeading>More categories</DropdownHeading>
              <DropdownLinks href="#">Motorcycle parts</DropdownLinks>
              <DropdownLinks href="#">Body and frame</DropdownLinks>
              <DropdownLinks href="#">Engines and parts</DropdownLinks>
              <DropdownLinks href="#">Accessories</DropdownLinks>
              <DropdownLinks href="#">Exhausts and systems</DropdownLinks>
              <DropdownLinks href="#">Rims</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
        <ContentList>Deals</ContentList>
        <Dropdown>
          <ContentList>Sell</ContentList>
          <DropdownMenu>
            <DropdownItems>
              <DropdownLinks href="#">Create listing</DropdownLinks>
              <DropdownLinks href="#">Apply as a business</DropdownLinks>
              <DropdownLinks href="#">Seller center</DropdownLinks>
            </DropdownItems>
          </DropdownMenu>
        </Dropdown>
      </Wrapper>
    </Container>
  );
};

export default Links;
