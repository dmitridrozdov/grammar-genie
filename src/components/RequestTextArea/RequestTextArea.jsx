import React, { useState } from 'react'
import { IconButton, TextField } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import useStyles from './styles'


const RequestTextArea = ({ value, onChange, onSend, onClear }) => {
    const classes = useStyles()
    const [valueLocal, setValueLocal] = useState('')

    // const clear = () => {
    //     console.log('clear')
    //     setValueLocal('')
    // }

    return (
        <div className={classes.container}>
            <TextField
                value={value}
                onChange={onChange}
                className={classes.textArea}
                InputProps={{ className: classes.inputTextStyle }}
                // InputProps={{
                //     disableUnderline: true,
                //     fontFamily: 'Kanit',
                //     fontSize: '14px',
                // }}
            />

            <IconButton  onClick={onSend} size="small">
                <SendIcon />
            </IconButton>
            <IconButton  onClick={onClear} size="small">
                <ClearIcon />
            </IconButton>
        </div>
    )
}

export default RequestTextArea

