import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./pages/RecipeDetail";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/add" component={AddRecipe} />
      <Route path="/recipe/:id" component={RecipeDetail} />
    </Router>
  );
}

export default AppRouter;
