import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [];
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
  const host = "http://localhost:5000";
  /*************Fetch all notes*********/
   // Get all Notes
   const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkN2JkNDQ0ZjRlM2UzOWFlNDRjYzRjIn0sImlhdCI6MTY0MTUzMjQwMn0.BdUxbfZNTjo6P6FoEVfqvR2C_ycLYLIqHPaMCK_RSl8"
      }
    });
    const json = await response.json()
    setNotes(json)
  }
  // const initialNotes = [
  //   {
  //     _id: "61d95c73a2ce0ed0a970288b",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Computer science",
  //     description: "Data structures",
  //     tag: "Read",
  //     date: "2022-01-08T09:42:11.153Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dcfe8aa29d68c4f3411cff",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Geography",
  //     description: "Latitudes & Longitudes",
  //     tag: "Read",
  //     date: "2022-01-11T03:50:34.343Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dcff2fe8a091750bd4a8cd",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Mathematics",
  //     description: "Trigonometry",
  //     tag: "Read",
  //     date: "2022-01-11T03:53:19.609Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dcff69649142e70555b559",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Physics",
  //     description: "Rotation",
  //     tag: "Solve",
  //     date: "2022-01-11T03:54:17.011Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dcffbef9e8d8cb2ca07242",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Chemistry",
  //     description: "Chemical Equations",
  //     tag: "Solve",
  //     date: "2022-01-11T03:55:42.985Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dd00a20fecbb6b58255b62",
  //     user: "61d7bd444f4e3e39ae44cc4c",
  //     title: "Biology",
  //     description: "Plant Kingdom",
  //     tag: "Read",
  //     date: "2022-01-11T03:59:30.051Z",
  //     __v: 0,
  //   },
  // ];
  const [notes, setNotes] = useState(initialNotes);
  /**********Add a note **********/
  const addNote = async(title, description, tag) => {
    getNotes()
    // API Call
  const response = await fetch(`${host}/api/notes/addNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkN2JkNDQ0ZjRlM2UzOWFlNDRjYzRjIn0sImlhdCI6MTY0MTUzMjQwMn0.BdUxbfZNTjo6P6FoEVfqvR2C_ycLYLIqHPaMCK_RSl8",
    },
    body: JSON.stringify({title, description, tag}),
  });
    const note = {
      _id: "61dd00a20fecbb6b58255b62",
      user: "61d7bd444f4e3e39ae44cc4c",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-11T03:59:30.051Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  /**********Delete a note **********/
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkN2JkNDQ0ZjRlM2UzOWFlNDRjYzRjIn0sImlhdCI6MTY0MTUzMjQwMn0.BdUxbfZNTjo6P6FoEVfqvR2C_ycLYLIqHPaMCK_RSl8",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  /**********Edit a note **********/
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkN2JkNDQ0ZjRlM2UzOWFlNDRjYzRjIn0sImlhdCI6MTY0MTUzMjQwMn0.BdUxbfZNTjo6P6FoEVfqvR2C_ycLYLIqHPaMCK_RSl8",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {/* {{state, updateState}} is same as {{state: state, updateState:updateState}}; the former is modern javascript syntax */}
      {props.children}
    </NoteContext.Provider>
  );
};

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
