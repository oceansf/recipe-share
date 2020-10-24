import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 0,
    color: 'white',
  },
}));

export default function SimpleDialog({
  handleClose,
  open,
  title,
  bio,
  ingredients,
  instructions,
}) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth
    >
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{bio}</DialogContentText>
        <div>
          <h3>INGREDIENTS:</h3>
          <ul>
            {ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <h3>INSTRUCTIONS:</h3>
          <ol>
            {instructions.map(step => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </DialogContent>
      <Button variant="contained" color="primary" className={classes.button}>
        Save as PDF
      </Button>
    </Dialog>
  );
}
