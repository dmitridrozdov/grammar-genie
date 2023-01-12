import React from 'react'
import CorrectResponse from '../CorrectResponse/CorrectResponse';
import { Grid } from '@material-ui/core';

const RephraseComponent = ({ text }) => {

    const parseString = str => {
        const arr = str.split('. ');
        return arr.map(item => item.replace(/[0-9.]/g, '').trim());
    }
    
    console.log(text)
    const array = parseString(text).filter(item => item !== '')
    console.log(array)

    return (
        <>
            {array.map(rephrase => (
                <Grid xs={12}> 
                    <CorrectResponse key={rephrase} text={rephrase} />
                </Grid>
            ))}
        </>
    )
}

export default RephraseComponent