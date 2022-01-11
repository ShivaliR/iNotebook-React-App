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
        },
        {
          "_id": "61dcfe8aa29d68c4f3411cff",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Geography",
          "description": "Latitudes & Longitudes",
          "tag": "Read",
          "date": "2022-01-11T03:50:34.343Z",
          "__v": 0
        },
        {
          "_id": "61dcff2fe8a091750bd4a8cd",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Mathematics",
          "description": "Trigonometry",
          "tag": "Read",
          "date": "2022-01-11T03:53:19.609Z",
          "__v": 0
        },
        {
          "_id": "61dcff69649142e70555b559",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Physics",
          "description": "Rotation",
          "tag": "Solve",
          "date": "2022-01-11T03:54:17.011Z",
          "__v": 0
        },
        {
          "_id": "61dcffbef9e8d8cb2ca07242",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Chemistry",
          "description": "Chemical Equations",
          "tag": "Solve",
          "date": "2022-01-11T03:55:42.985Z",
          "__v": 0
        },
        {
          "_id": "61dd00a20fecbb6b58255b62",
          "user": "61d7bd444f4e3e39ae44cc4c",
          "title": "Biology",
          "description": "Plant Kingdom",
          "tag": "Read",
          "date": "2022-01-11T03:59:30.051Z",
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
