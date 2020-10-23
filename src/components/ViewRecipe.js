import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 0,
    color: 'white',
  },
}));

export default function SimpleDialog({ handleClose, open }) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">[Recipe name]</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here is where the OP's ingredients and instructions will go..
        </DialogContentText>
        <div>
          <h2>INGREDIENTS:</h2>
          <ul>
            <li>2 Mushrooms</li>
            <li>3 Apples</li>
            <li>6 Eggs</li>
          </ul>
          <h2>INSTRUCTIONS:</h2>
          <ol>
            <li>Heat pot</li>
            <li>Fill pot with sauce</li>
            <li>Let it sit for an hour</li>
          </ol>
        </div>
      </DialogContent>
      <Button variant="contained" color="primary" className={classes.button}>
        Save as PDF
      </Button>
    </Dialog>
  );
}
