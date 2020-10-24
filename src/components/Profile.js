import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Box,
  Typography,
  Avatar,
  Divider,
  Grid,
} from '@material-ui/core';

import TopAppBar from './TopAppBar';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 77,
    height: 77,
    marginRight: 16,
  },
  paper: {
    padding: theme.spacing(2),
    height: '123px',
    textAlign: 'center',
    color: 'lightGreen',
    background: 'grey',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TopAppBar />
      <Container maxWidth="sm">
        <Paper>
          {/* PROFILE HEADER SECTION */}
          <Box
            display="flex"
            alignItems="space-around"
            justifyContent="center"
            p={3}
          >
            <Avatar className={classes.avatar}>OF</Avatar>
            <Typography variant="h4">ocean_fuaga</Typography>
          </Box>
          <Divider />
          {/* PROFILE METRICS SECTION */}
          <Box display="flex" justifyContent="space-around" p={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>10</Typography>
              <Typography>Posts</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>100</Typography>
              <Typography>Followers</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>80</Typography>
              <Typography>Following</Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={1}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>A Post</Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
