import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
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

  return (
    <AppBar position="sticky" elevation={0} className={classes.root}>
      <Toolbar>
        <Typography variant="h5" color="primary" className={classes.title}>
          Recipe Share
        </Typography>
        <IconButton onClick={() => scroll.scrollToTop()}>
          <HomeIcon color="secondary" />
        </IconButton>
        <IconButton className={classes.loginBtn}>
          <AccountCircleIcon color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
