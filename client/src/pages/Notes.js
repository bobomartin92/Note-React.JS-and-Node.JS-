import { Container, Grid} from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NoteCard from '../component/NoteCard'

export default function Notes() {

  const history = useHistory()
  const [notes, setNotes] = useState([])

  useEffect(async () => {
    const res = await fetch('https://notes-simple.herokuapp.com')
    const data = await res.json()

    setNotes(data)
  }, [])

  const handleDelete = async (id) => {
    await fetch('https://notes-simple.herokuapp.com/notes/' + id, {
      method: "DELETE"
    })

    const newNotes = notes.filter(note => note._id !== id)

    setNotes(newNotes)
  }

  


  return (
    <Container>
      <Grid container spacing={3}>
        {notes.length > 0 ? notes.map(note => (
          <Grid key={note._id} item xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        )) : <Grid item>Create Note</Grid>}
      </Grid>
    </Container>
  )
}
