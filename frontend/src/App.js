import React, { Component } from "react";
import { AppProvider } from "./AppContext";
import Router from "./Router";
import StyledPage from "./StyledPage.js";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <StyledPage>
          <Router />
        </StyledPage>
      </AppProvider>
    );
  }
}

export default App;
