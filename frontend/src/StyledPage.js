import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", "Roboto", "Oxygen", sans-serif;
  }
`;

const theme = {
  black: "#393939",
  maxWidth: "1000px",
  boxShadow: "0 12px 24px 0 rgba(0,0,0,0.09)"
};

const PageContainer = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class StyledPage extends Component {
  render() {
    return (
      <PageContainer>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Inner>
            {this.props.children}
          </Inner>
        </ThemeProvider>
      </PageContainer>
    );
  }
}

export default StyledPage;
