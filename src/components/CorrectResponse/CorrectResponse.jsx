import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { Fade, IconButton } from '@material-ui/core'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DoneIcon from '@mui/icons-material/Done'


const CorrectResponse = ({ response }) => {
  // const [text, setText] = useState('')
  // const [isTyping, setIsTyping] = useState(true)

  const classes = useStyles()
  const [copySuccess, setCopySuccess] = useState(<ContentCopyIcon />)

  // const deleteSpecialCharsStartFinish = response.replace(/^"|"$/g,'')

  // useEffect(() => {
  //   if (isTyping) {
  //     let i = 0;
  //     const interval = setInterval(() => {
  //       setText(deleteSpecialCharsStartFinish.slice(0, i));
  //       i++;
  //       if (i > deleteSpecialCharsStartFinish.length) {
  //         clearInterval(interval);
  //         setIsTyping(false);
  //       }
  //     }, 50);
  //     return () => clearInterval(interval);
  //   }
  // }, [isTyping, deleteSpecialCharsStartFinish]);

  

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
    // <Fade in={true}  timeout={ 2000 }>
      <div className={classes.box}>
          <div className={classes.copyButtonDiv}>
            <IconButton onClick={() => copyToClipBoard(response)} className={classes.copyButton}>
              {copySuccess}
            </IconButton>
          </div>
          <div className={classes.text}>{response}</div>
      </div>
    // </Fade>
  )
}

export default CorrectResponse