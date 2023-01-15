import React from 'react'
import CorrectResponse from '../CorrectResponse/CorrectResponse';
import { Grid } from '@material-ui/core';

const RephraseComponent = ({ text }) => {

    const parseString = str => {
        return str.split(/1\.|2\.|3\./).map(item => item.trim()).filter(item => item !== '')
    }
    
    console.log(text)
    const array = parseString(text)
    console.log(array)

    return (
        <>
            {array.map(rephrase => (
                <Grid item xs={12}> 
                    <CorrectResponse key={rephrase} text={rephrase} />
                </Grid>
            ))}
        </>
    )
}

export default RephraseComponent