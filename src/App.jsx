import { useState } from 'react'
import './App.css'
import RequestTextArea from './components/RequestTextArea/RequestTextArea'
import { TextField, Button, Grid } from '@material-ui/core'

const App = () => {
  const [request, setRequest] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  const handleSubmit = (e) => {

  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
          <TextField id="standard-basic" label="Product" 
              value={request} 
              onChange={(e) => handleChange(e)}
          />
      </Grid>
      
      <Grid item xs={6}>
          <Button variant='contained' color='primary' type='submit' fullWidth
              onClick={ handleSubmit }
          >
                  R
          </Button>
      </Grid>
      <Grid item xs={12}>
        Just text ... response will be here
      
      </Grid>
    </Grid>
  )
}

export default App
