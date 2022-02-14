import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    details: String,
    category: String,
})

const Note = mongoose.model('Note', noteSchema);

export default Note;

