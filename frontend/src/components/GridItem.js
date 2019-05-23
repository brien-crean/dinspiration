import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GridItemContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  background-image: url(${props => props.image});
  box-shadow: ${props => props.theme.boxShadow};
`;

const GridItem = ({image, id}) => {
  return (
    <Link to={`/recipe/${id}`}>
      <GridItemContainer image={image} />
    </Link>
  );
};

export default GridItem;
