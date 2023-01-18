import React from 'react'
import { IconButton, TextField } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import useStyles from './styles'


const RequestTextArea = ({ value, onChange, onSend, onClear }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <TextField
                value={value}
                onChange={onChange}
                className={classes.textArea}
                // InputProps={{ className: classes.inputTextStyle }}
                // InputProps={{
                //     disableUnderline: true,
                //     fontFamily: 'Kanit',
                //     fontSize: '14px',
                // }}
                InputProps={{
                    classes: {
                      underline: classes.customUnderline,
                    },
                    className: classes.inputTextStyle,
                  }}
            />

            <IconButton  onClick={onSend} className={classes.button}>
                <SendIcon />
            </IconButton>
            <IconButton  onClick={onClear} className={classes.button}>
                <ClearIcon />
            </IconButton>
        </div>
    )
}

export default RequestTextArea

