import React, { useState } from 'react'
import { Container, Typography, Button, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useHistory } from 'react-router'

const field = {
  marginTop: 3,
  marginBottom: 3,
  display: 'block'
}

export default function Create() {

  const history = useHistory()
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('todos')

  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title === "") {
      setTitleError(true)
    }
    if(details === "") {
      setDetailsError(true)
    }

    if (title && details) {
      await fetch('https://notes-simple.herokuapp.com/create', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({title, details, category})
      })

      history.push('/')
    }
  }
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create A New Note
      </Typography>

      <form onSubmit={handleSubmit} autoComplete='off' noValidate>
        <TextField sx={field}
          label='Note Title'
          value={title}
          required
          fullWidth
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField sx={field}
          label='Note Details'
          value={details}
          required
          fullWidth
          multiline
          rows={4}
          variant='outlined'
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
      
        <FormControl sx={field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value='todos' control={<Radio />} label='Todos' />
              <FormControlLabel value='reminder' control={<Radio />} label='Reminder' />
              <FormControlLabel value='work' control={<Radio />} label='Work' />
            </RadioGroup>
        </FormControl>
        
        <Button
          type='submit'
          variant='contained'
          color='primary'
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>
      </form>
      
    </Container>
  )
}
