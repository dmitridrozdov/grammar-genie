import React, { useState } from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core'


const CorrectResponse = ({ text }) => {
  const classes = useStyles()
  const [copySuccess, setCopySuccess] = useState('Copy')

  const copyToClipBoard = async textToCopy => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess('Copied!');
      setTimeout(() => {setCopySuccess('Copy')}, 3000); // Reset after 3 seconds
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  }

  return (
    <div className={classes.box}>
      <div className={classes.copyButtonDiv}>
        <Button className={classes.copyButton} onClick={() => copyToClipBoard(text)}>{copySuccess}</Button>
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  )
}

export default CorrectResponse