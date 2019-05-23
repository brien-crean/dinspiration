import React, { useContext } from 'react'
import styled from 'styled-components';
import GridItem from './GridItem';
import AppContext from '../AppContext';
import { ROOT_URL } from '../lib/config';

const GridLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Grid() {
  const context = useContext(AppContext);
  const { recipes, loading } = context.state;
  return (
    <GridLayout>
      {
        loading
          ? <p>Loading...</p> : recipes ?
            recipes.map(recipe => {
              return <GridItem
                key={recipe._id}
                id={recipe._id}
                slug={recipe.slug}
                image={`${ROOT_URL}/uploads/${recipe.photo}`}
              />
            })
          :
            null
      }
    </GridLayout>
  )
}
