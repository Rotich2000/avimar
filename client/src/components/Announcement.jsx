import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0099ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal! Free Delivery on Orders over Ksh 5000 </Container>
  );
};

export default Announcement;
