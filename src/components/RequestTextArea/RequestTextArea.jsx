import React from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from './styles'


const RequestTextArea = ({ value, onChange, onSend }) => {
    const classes = useStyles()
    return (
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
    )
}

export default RequestTextArea

