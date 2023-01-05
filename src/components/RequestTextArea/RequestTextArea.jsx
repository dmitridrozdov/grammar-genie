import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px',
    border: '1px solid #ccc',
  },
  textArea: {
    width: '400px',
    height: '40px',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Roboto',
    borderRadius: '4px',
    
    padding: '16px',
    '&:focus': {
      outline: 'none',
      borderColor: '#555',
    },
  },
  button: {
    width: '80px',
    height: '40px',
  },
};

const RequestTextArea = ({ value, onChange, onSend, classes }) => (
  <div className={classes.container}>
    <TextField
      value={value}
      onChange={onChange}
      className={classes.textArea}
      InputProps={{
        disableUnderline: true,
      }}
    />
    <Button variant="contained" onClick={onSend} className={classes.button}>
      Send
    </Button>
  </div>
);

export default withStyles(styles)(RequestTextArea);

