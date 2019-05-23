import React, { Component, createContext } from 'react';
import axios from 'axios';
import { ROOT_URL } from './lib/config';
const AppContext = createContext();

class AppProvider extends Component {
  state = {
    recipes: null,
    loading: false,
    currentRecipe: null,
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    this.setState({ loading: true })
    axios.get(`${ROOT_URL}/recipes`)
    .then(response => {
      console.log(response)
      this.setState({ recipes: response.data.recipes, loading: false });
    })
    .catch(error => console.log(error))
  }

  fetchCurrentRecipe = (id) => {
    this.setState({ loading: true })
    axios.get(`${ROOT_URL}/recipe/${id}`)
    .then(response => {
      console.log(response)
      this.setState({ currentRecipe: response.data.recipe, loading: false }, ()=>console.log(this.state.currentRecipe));
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <AppContext.Provider value={{
        state: this.state,
        fetchRecipes: this.fetchRecipes,
        fetchCurrentRecipe: this.fetchCurrentRecipe
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppProvider };
export const AppConsumer = AppContext.Consumer;
export default AppContext;