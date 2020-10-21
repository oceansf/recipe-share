import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SignIn from './SignIn';
import Feed from './Feed';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00c853',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/feed" component={Feed} />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
