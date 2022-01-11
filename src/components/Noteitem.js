import React from "react";

const Noteitem = (props) => {
  const { notes } = props;
  return (
    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return (
          <div
            className="card row mx-3 my-3"
            style={{ width: "18rem" }}
            key={note.title}
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i class="far fa-edit mx-1"></i>
                <i class="far fa-trash-alt mx-1"></i>
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
