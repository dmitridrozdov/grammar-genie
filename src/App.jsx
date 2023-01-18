import { useState, useEffect } from 'react'
import RequestTextArea from './components/RequestTextArea/RequestTextArea'
import { Grid, Container, Grow, Typography } from '@material-ui/core'
import AppBar from './components/AppBar/AppBar'
import CorrectResponse from './components/CorrectResponse/CorrectResponse'
import RephraseComponent from './components/RephraseComponent/RephraseComponent'

const App = () => {
  const [request, setRequest] = useState('')
  const [correction, setCorrection] = useState('')
  const [rephrase, setRephrase] = useState('')

  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const [textRephrase, setTextRephrase] = useState('')
  const [isRephraseTyping, setIsRephraseTyping] = useState(true)

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const interval = setInterval(() => {
        setText(correction.slice(0, i));
        i++;
        if (i > correction.length) {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, 20);
      return () => clearInterval(interval)
    }
  }, [isTyping, correction])


  useEffect(() => {
    if (isRephraseTyping) {
      let i = 0;
      const interval = setInterval(() => {
        setTextRephrase(rephrase.slice(0, i));
        i++;
        if (i > rephrase.length) {
          clearInterval(interval)
          setIsRephraseTyping(false)
        }
      }, 10);
      return () => clearInterval(interval)
    }
  }, [isRephraseTyping, rephrase])
  
  const getCorrection = async() => {
    setText('...')
    setTextRephrase('1. ...')
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
      setCorrection(parsedData.replace(/^"|"$/g,''))
      setIsTyping(true)
    } else {
      const err = await response.text()
      setCorrection('Something went wrong')
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
      setIsRephraseTyping(true)
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

  const handleClear = (e) => {
    setRequest('')
    setCorrection('')
    setRephrase('')
    setText('')
    setTextRephrase('')
  }

  return (
    <Container maxWidth='lg'>

      <AppBar />

      <Grow in>
        <Container>
            <Grid container>
              <Grid item xs={12}>
                  <RequestTextArea
                    value={request}
                    onChange={handleChange}
                    onSend={handleSubmit}
                    onClear={handleClear}
                    />
              </Grid>
              {text === '' ? <></> : <Typography style={{ marginTop: '10px', fontFamily: 'Kanit', color: '#326c99', fontSize: '12px' }}>
                Correct
              </Typography>}
              <Grid item xs={12}> 
                {text === '' ? <></> : <CorrectResponse response={text} />}
              </Grid>
              {textRephrase === '' ? <></> : <Typography style={{ marginTop: '30px', fontFamily: 'Kanit', color: '#326c99', fontSize: '12px' }}>
                Varieties
              </Typography>}
              <Grid container spacing={1}>
                {textRephrase === '' ? <></> : <RephraseComponent response={textRephrase} />}
              </Grid>
            </Grid>
        </Container>
      </Grow>
      

    </Container>


  )
  
}

export default App
