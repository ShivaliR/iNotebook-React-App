const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const router = express.Router();
const Notes = require("../models/Note");
const { body, validationResult } = require("express-validator");

//******ROUTE 1: Fetch all notes of logged-in user: GET "/api/notes/fetchNotes".Login required (Get request as not dealing with secret credentials)
router.get("/fetchNotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//****************ROUTE 2: Add notes of logged-in user: POST "/api/notes/addNote".Login required (Get request as not dealing with secret credentials)
router.post(
  "/addNote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description should be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {try {
      //destructuring concept
      const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    
    const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//*************************************ROUTE 3: update existing notes : PUT "/api/notes/updateNote".Login required********************************
router.put("/updateNote/:id", fetchuser, async (req, res) => {
  try {
    //using destructuring
    const { title, description, tag } = req.body;
    //create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found!");
    }
    if (note.user.toString() !== req.user.id) {
      console.log(
        "Hi I'm inside local func" + note.user.toString() + "&" + req.user.id
      );
      return res.status(401).send("Not authorized!");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ Success: "Note has been updated", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//********************************ROUTE 4: Delete existing notes : DELETE "/api/notes/deleteNote".Login required****************************
router.delete("/deleteNote/:id", fetchuser, async (req, res) => {
  try {
    //Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found!");
    }
    //Allow deletion of notes only if user owns the notes
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorized!");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
