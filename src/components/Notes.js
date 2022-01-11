import React, { useContext }  from 'react'
import contextValue from '../context/notes/NoteContext'

const Notes = () => {
    const context = useContext(contextValue);
    const {notes,setNotes} = context;
    return (
        <div>
          <div className="container my-3">
          <h2>Your notes</h2>
        {notes.map((note)=>{
            return note.title;
        })}
      </div>   
        </div>
    )
}

export default Notes
