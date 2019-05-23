import React, { Component } from 'react';
import AppContext from '../AppContext';
import { ROOT_URL } from '../lib/config';

class RecipeDetail extends Component {
  async componentWillMount() {
    this.context.fetchCurrentRecipe(this.props.match.params.id)
  }
  render() {
    const { currentRecipe, loading } = this.context.state;
    return (
      <div>
        {
          loading
            ? <p>Loading...</p>
            : currentRecipe
                ? <div>
                    <h1>{currentRecipe.name}</h1>
                    <img src={`${ROOT_URL}/uploads/${currentRecipe.photo}`} alt={currentRecipe.name} />
                    <p>{currentRecipe.description}</p>
                    <div>
                    {
                      currentRecipe.tags.map(tag => (
                        <p key={tag}>{tag} </p>
                      ))
                    }
                    </div>
                  </div>
                : null
        }
      </div>
    )
  }
}
RecipeDetail.contextType = AppContext;
export default RecipeDetail;