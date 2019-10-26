import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import AppRouter from '../routes/AppRouter';
import GlobalNavigation from './layouts/GlobalNavigation';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  height: inherit;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <GlobalNavigation />
          <AppRouter />
        </Container>
      </Router>
    );
  }
}
