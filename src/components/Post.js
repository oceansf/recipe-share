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
  IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  likeBtn: {
    padding: 0,
    color: 'red',
  },
}));

const Post = ({ title, author, likes, ingredients, instructions, bio }) => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleOpen = () => {
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <Paper className={classes.root}>
      <Box display="flex" alignItems="center" className={classes.headerWrapper}>
        <Avatar className={classes.avatar}>OF</Avatar>
        <Box>
          <h2 className={classes.headerText}>{title}</h2>
          <h3 className={classes.headerText}>{author}</h3>
        </Box>
      </Box>
      <img
        className={classes.image}
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=408%2C370"
        alt="recipe"
      />
      <Box className={classes.contentWrapper}>
        <Box display="flex" alignItems="center">
          <IconButton className={classes.likeBtn} onClick={() => handleLiked()}>
            {liked ? (
              <FavoriteIcon style={{ margin: '0.5rem' }} />
            ) : (
              <FavoriteBorderIcon style={{ margin: '0.5rem' }} />
            )}
          </IconButton>
          <Typography className={classes.likes}>{`${likes} likes`}</Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpen}
          className={classes.button}
        >
          Recipe Instructions
        </Button>
        <ViewRecipePopup
          open={popupOpen}
          handleClose={handleClose}
          title={title}
          bio={bio}
          ingredients={ingredients}
          instructions={instructions}
        />
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
