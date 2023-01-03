import { useState } from 'react'
import './App.css'
import RequestTextArea from './components/RequestTextArea/RequestTextArea'
import { TextField, Button } from '@material-ui/core'

const App = () => {
  const [request, setRequest] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  const handleSubmit = (e) => {

  }

  return (
      <TextField
        value={request}
        onChange={(e) => handleChange(e)}
      />
  )
}

export default App
