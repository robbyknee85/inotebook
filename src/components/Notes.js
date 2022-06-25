import React,{useContext, useState} from 'react'
import { AddNote } from './AddNote'
import { Noteitems } from './Noteitems'
import noteContext from '../contex/notes/noteContext'

export const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes}=context;
  return (
    <div className='note-container'>
        <AddNote/>
        <div className='row my-3'>   
        {notes.map(note=>{
          return <div className='col-md-4 my-2'> <Noteitems title={note.title} description={note.description}/> </div>
        })} 
    </div>
    </div>
  )
}
