import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from './TopAppBar';
import Post from './Post';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TopAppBar />
      <Container maxWidth="sm" className={classes.root}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
    </React.Fragment>
  );
};

export default Feed;
