import React from 'react'
import useStyles from './styles'
import { Typography, Toolbar, Grid } from '@material-ui/core'

const AppBar = () => {
  const classes = useStyles()
  return (
    <Grid item container xs={12}>
        <Toolbar>
          <img alt='Grammar Genie' src='/public/logo.png' width='50' height='50' className={classes.logo}/>
          <Typography className={classes.headerText}>Grammar Genie</Typography>
        </Toolbar>
    </Grid>      
  )
}

export default AppBar
