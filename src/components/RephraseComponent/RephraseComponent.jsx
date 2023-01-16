import React from 'react'
import CorrectResponse from '../CorrectResponse/CorrectResponse';
import { Grid } from '@material-ui/core';

const RephraseComponent = ({ response }) => {

    const parseString = str => {
        return str.split(/1\.|2\.|3\./).map(item => item.trim()).filter(item => item !== '')
    }
    
    console.log(response)
    const array = parseString(response)
    console.log(array)

    const generateUniqueKey = () => {
        return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5)
    }

    return (
        <>
            {array.map(rephrase => (
                <Grid item xs={12} key={generateUniqueKey()}> 
                    <CorrectResponse response={rephrase} />
                </Grid>
            ))}
        </>
    )
}

export default RephraseComponent