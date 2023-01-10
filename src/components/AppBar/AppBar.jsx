import React from 'react'
import useStyles from './styles'
import { Typography, Toolbar, Grid } from '@material-ui/core'

const AppBar = () => {
  const classes = useStyles()
  return (

      <Grid container spacing={2} xs={12} >
        <Grid item container xs={12} >
            <Toolbar>
              <img alt='Grammar Genie' src='/src/assets/logo.png' width='50' height='50' className={classes.logo}/>
              <Typography className={classes.headerText}>Grammar Genie</Typography>
            </Toolbar>
          </Grid>
        {/* <Grid xs={8} container className={classes.leftPart}>
          
        </Grid> */}
      </Grid>


      
  )
}

export default AppBar
