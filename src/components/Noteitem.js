import React from "react";
import { useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const {notes} = props;
  const context = useContext(NoteContext);
  const {deleteNote,editNote} = context;

  return (
    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return (
          <div
            className="card row mx-3 my-3"
            style={{ width: "18rem" }}
            key={note._id}
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i className="far fa-edit mx-1" onClick={()=>{
                  editNote(note._id, note.title, note.description, note.tag)
                }}></i>
                <i className="far fa-trash-alt mx-1" onClick={()=>{
                  deleteNote(note._id)
                }}></i>
              </div>
              <p className="card-text">{note.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Noteitem;
