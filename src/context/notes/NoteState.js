import NoteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props) => {
    // const s1 = {
    //     "name": "Shivali",
    //     "class": "5th"
    // }
    // const [state, setstate] = useState(s1);
    // const updateState = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "Ananya",
    //             "class": "6th"
    //         })
    //     }, 1000);
    // }
    const initialNotes = [
        {
          "_id": "61d95c73a2ce0ed0a970288b",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Computer science",
          "description": "Data structures",
          "tag": "Read",
          "date": "2022-01-08T09:42:11.153Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{notes}}>
            {/* {{state, updateState}} is same as {{state: state, updateState:updateState}}; the former is modern javascript syntax */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

/*import NoteContext from "./NoteContext";
const NoteState = (props) => {
    return (
        <NoteContext.Provider value=>
            {props.children}
        </NoteContext.Provider>
    )
} 
export default NoteState
*/
