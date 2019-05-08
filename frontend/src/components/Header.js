import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: ${props => props.maxWidth};
  display: flex;
  flex-direction: row;
`;

const Heading = styled.h1`
  font-size: 20px;
  padding-right: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Heading>Home</Heading>
      </Link>
      <Link to="/add">
        <Heading>Add Recipe</Heading>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
