import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/add" component={AddRecipe} />
    </Router>
  );
}

export default AppRouter;
