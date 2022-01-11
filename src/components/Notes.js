import React, { useContext }  from 'react'
import contextValue from '../context/notes/NoteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(contextValue);
    const {notes,setNotes} = context;
    return (
        <div>
         <Noteitem notes={notes}/>
        </div>
    )
}

export default Notes;
