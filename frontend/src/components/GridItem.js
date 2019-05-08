import React from "react";
import styled from "styled-components";

const GridItemContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  background-image: url(${props => props.image});
  box-shadow: ${props => props.theme.boxShadow};
`;

const GridItem = ({image, match}) => {
  return (
    <GridItemContainer image={image} />
  );
};

export default GridItem;
