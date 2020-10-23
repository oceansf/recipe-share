import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

// TODO: IMPLEMENT REACT-HOOK-FORM

const useStyles = makeStyles(theme => ({
  ingredientInput: {
    fontSize: 24,
  },
  postBtn: {
    color: 'white',
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Post a recipe</DialogTitle>
        <DialogContent>
          {/* HOW THE FORM SHOULD BE ORGANIZED */}
          <div>
            <input placeholder="Recipe title" />
          </div>
          <div>
            <h3>Upload an image</h3>
            <input id="file" name="file" type="file" />
          </div>
          <div>
            <h3>Ingedients</h3>
            <ul>
              <li>Example ingredient #1</li>
              <li>Example ingredient #2</li>
              <li>Example ingredient #3</li>
              <li>Example ingredient #4</li>
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol>
              <li>Do this...</li>
              <li>then that...</li>
              <li>and finally this.</li>
            </ol>
          </div>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleClose}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              className={classes.postBtn}
            >
              Post
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
