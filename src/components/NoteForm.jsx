import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createNote} from '../features/notes/noteSlice'


function NoteForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createNote({text}))
    setText('')
  }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label htmlFor='text'>Note</label>  
                <textarea type="text" wrap='physical' cols="0" rows="0" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>  
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Add note
                </button>
            </div>
        </form>
    </section>
  )
}

export default NoteForm