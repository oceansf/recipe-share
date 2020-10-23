import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignIn from './SignIn';
import Feed from './Feed';
import Profile from './Profile';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00c853',
    },
    secondary: {
      main: '#212121',
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
}));

// TODO: ADD DUMMY DATA

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <CssBaseline />
        <Router>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
