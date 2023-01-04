import { useState } from 'react'
import './App.css'
import RequestTextArea from './components/RequestTextArea/RequestTextArea'
import { TextField, Button, Grid } from '@material-ui/core'

const App = () => {
  const [request, setRequest] = useState('')
  const [correction, setCorrection] = useState('')
  const [rephrase, setRephrase] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  const getCorrection = async() => {
    const verifyRequest = 'correct English sentence:"' + request + '"'

    const response = await fetch('https://codex-ztt6.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: verifyRequest
        })
    })

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
      setCorrection(parsedData)
    } else {
      const err = await response.text()
      setCorrection("Something went wrong")
      alert(err)
    }
  }

  const getRephrase = async() => {
    const verifyRequest = 'rephrase English sentence 3 times:"' + request + '"'

    const response = await fetch('https://codex-ztt6.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: verifyRequest
        })
    })

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
      setRephrase(parsedData)
    } else {
      const err = await response.text()
      setRephrase("Something went wrong")
      alert(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    getCorrection()
    getRephrase()
    
}

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
          {/* <TextField id="standard-basic" label="Product" 
              value={request} 
              onChange={(e) => handleChange(e)}
          /> */}
           <RequestTextArea
            value={request}
            onChange={handleChange}
            onSave={handleSubmit}
            />
      </Grid>
      
      {/* <Grid item xs={3}>
          <Button variant='contained' color='primary' type='submit' fullWidth
              onClick={ handleSubmit }
          >
                  R
          </Button>
      </Grid> */}
      <Grid item xs={12}> {correction} </Grid>
      <Grid item xs={12}> {rephrase} </Grid>
    </Grid>
  )
}

export default App
