import React, { useContext, useEffect }  from 'react'
import contextValue from '../context/notes/NoteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(contextValue);
    const {notes, getNotes} = context;
    useEffect(() => {
        getNotes()
    }, [])
    return (
        <div>
         <Noteitem notes={notes}/>
        </div>
    )
}
export default Notes;
