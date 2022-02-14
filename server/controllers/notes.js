import mongoose from "mongoose";
import Note from "../models/Note.js"

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()

        res.status(200).json(notes);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createNote = async (req, res) => {
    const note = req.body;

    const newNote = new Note(note);
    
    try {
        await newNote.save()

        res.status(201).json(newNote);

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteNote = async (req, res) => {
    const {id:_id} = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with the id")

    await Note.findByIdAndRemove(_id)

    res.json({message: "Post deleted"})
}
