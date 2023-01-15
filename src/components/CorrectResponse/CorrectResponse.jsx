import React, { useState } from 'react'
import useStyles from './styles'
import { Fade, IconButton } from '@material-ui/core'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DoneIcon from '@mui/icons-material/Done'


const CorrectResponse = ({ text }) => {
  const classes = useStyles()
  const [copySuccess, setCopySuccess] = useState(<ContentCopyIcon />)

  const copyToClipBoard = async textToCopy => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(<DoneIcon />);
      setTimeout(() => {setCopySuccess(<ContentCopyIcon />)}, 3000); // Reset after 3 seconds
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  }

  return (
    <Fade in={true}>
      <div className={classes.box}>
        
          <div className={classes.copyButtonDiv}>
            <IconButton onClick={() => copyToClipBoard(text)} className={classes.copyButton}>
              {copySuccess}
            </IconButton>
          </div>
          <div className={classes.text}>{text}</div>
        
      </div>
    </Fade>
  )
}

export default CorrectResponse