import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from './TopAppBar';
import Post from './Post';
// THIS WILL BE REPLACED WITH ACTUAL DB
import dummy from '../dummyData';

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
        {dummy.orders.map(recipe => (
          <Post
            title={recipe.title}
            author={recipe.author}
            likes={recipe.likes}
            bio={recipe.bio}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Feed;
