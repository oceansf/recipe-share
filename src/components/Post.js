import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  Box,
  Divider,
  Typography,
  Link,
  Paper,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ViewRecipePopup from './ViewRecipe';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid lightgrey',
    borderRadius: 10,
    margin: '1rem 0',
  },
  headerWrapper: {
    padding: '0.5rem 0',
  },
  avatar: {
    margin: '1rem',
  },
  headerText: {
    margin: 0,
  },
  image: {
    width: '100%',
  },
  contentWrapper: {
    padding: '0 1rem',
  },
  button: {
    margin: '0.5rem 0',
  },
}));

const Post = () => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpen = () => {
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <Paper className={classes.root} elevation={2}>
      <Box display="flex" alignItems="center" className={classes.headerWrapper}>
        <Avatar className={classes.avatar}>OF</Avatar>
        <Box>
          <h2 className={classes.headerText}>Best Stew in the World</h2>
          <h3 className={classes.headerText}>ocean fuaga</h3>
        </Box>
      </Box>
      <img
        className={classes.image}
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=408%2C370"
        alt="recipe"
      />
      <Box className={classes.contentWrapper}>
        <Box display="flex" alignItems="center">
          <FavoriteBorderIcon style={{ margin: '0.5rem' }} />
          <Typography className={classes.likes}>100 likes</Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpen}
          className={classes.button}
        >
          Recipe Instructions
        </Button>
        <ViewRecipePopup open={popupOpen} handleClose={handleClose} />
        <Divider />
        <div style={{ margin: '0.5rem 0' }}>
          <list style={{ listStyle: 'none' }}>
            <li>
              <b>ocean_fuaga</b> This is the best recipe ever
            </li>
            <li>
              <b>JohnS</b> Damn, right!
            </li>
            <Link color="secondary">View comments</Link>
          </list>
        </div>
        <h5>Oct 21, 2020</h5>
      </Box>
    </Paper>
  );
};

export default Post;
