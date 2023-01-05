import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(value);
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          spacing={spacing}
          className={classes.control}
        >
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <div className={classes.paper}> grid </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpacingGrid;
