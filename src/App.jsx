import { useState } from 'react'
import RequestTextArea from './components/RequestTextArea/RequestTextArea'
import { Grid, Container, Grow } from '@material-ui/core'
import Intro from './components/Intro/Intro'
import AppBar from './components/AppBar/AppBar'

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
    console.log('handle submit >>>>>>>>>>>>>>>')
    e.preventDefault()
    getCorrection()
    getRephrase()
    
}

  return (
    <Container maxWidth='lg'>
      
      <AppBar />

      <Grow in>
        <Container>
          <Grid container spacing={2} xs={12} >
            <Grid item container xs={8}>
              <Intro />
            </Grid>
            <Grid xs={4} container>
              <Grid>
                  <RequestTextArea
                    value={request}
                    onChange={handleChange}
                    onSend={handleSubmit}
                    />
              </Grid>
              <Grid item xs={12} container> {correction} </Grid>
              <Grid item xs={12} container> {rephrase} </Grid>
            </Grid>
           

              

          </Grid>
        </Container>
      </Grow>
      

    </Container>


  )
  
}

export default App
