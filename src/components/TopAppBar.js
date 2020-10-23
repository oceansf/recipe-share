import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Menu, MenuItem, Divider } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import PostRecipeForm from './PostRecipeForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#fafafa',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Sansita Swashed, cursive',
  },
  loginBtn: {
    color: 'white',
  },
}));

const TopAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [newPostForm, setNewPostForm] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.root}>
      <Toolbar>
        <Typography variant="h5" color="primary" className={classes.title}>
          Recipe Share
        </Typography>
        <Link to="/feed">
          <IconButton onClick={() => scroll.scrollToTop()}>
            <HomeIcon color="secondary" />
          </IconButton>
        </Link>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.loginBtn}
        >
          <AccountCircleIcon color="secondary" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => setNewPostForm(!newPostForm)}>
            <AddCircleIcon color="primary" style={{ margin: 5 }} />
            Post Recipe
          </MenuItem>
          <Link
            to="/profile"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem onClick={handleClose}>
              <PersonOutlineIcon color="primary" style={{ margin: 5 }} />{' '}
              Profile
            </MenuItem>
          </Link>
          <Divider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        {/* MAYBE: MOVE THIS FORM OUTSIDE OF THE APPBAR */}
        {newPostForm ? <PostRecipeForm /> : null}
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
