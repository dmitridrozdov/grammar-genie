import React from 'react'
import { Typography  } from '@material-ui/core'
import useStyles from './styles'


const Intro = () => {
  const classes = useStyles()
  return (
    <>
        <Typography className={classes.headerText}>
            Grammatically correct sentences are important for a number of reasons:
        </Typography>
        <br/><br/>
        <Typography className={classes.text}>  
            <span className={classes.headerText}>Clarity: </span>Grammatically correct sentences are easier to understand because they follow the rules of syntax and structure, making it clear what the writer is trying to say.
        </Typography>
        <br/>
        <Typography className={classes.text}> 
            <span className={classes.headerText}>Professionalism: </span>Writing grammatically correct sentences is important in professional settings, as it shows that you have a strong command of the language and are able to communicate effectively.
        </Typography>
        <br/>
        <Typography className={classes.text}>
            <span className={classes.headerText}>Credibility: </span>Grammatically correct sentences increase the credibility of the writer, as they demonstrate attention to detail and a level of professionalism.
        </Typography>
        <br/>
        <Typography className={classes.text}>
        <   span className={classes.headerText}>Audience: </span>Different audiences may have different expectations for the level of grammar used in writing. For example, academic writing is expected to be more formal and grammatically correct, while casual social media posts may be more relaxed.
        </Typography>
        <br/>
        <Typography className={classes.text}>
            <span className={classes.headerText}>Personal expression: </span>Correct grammar allows you to effectively express yourself and your ideas, and helps you to be understood by your audience.
        </Typography>
    </>
  )
}

export default Intro