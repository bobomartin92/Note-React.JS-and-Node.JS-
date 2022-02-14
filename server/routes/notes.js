import express from "express";
import { createNote, deleteNote, getNotes } from "../controllers/notes.js";

const router = express.Router()

router.route('/')
    .get(getNotes)
router.route('/create')
    .post(createNote)
router.route('/notes/:id')
    .delete(deleteNote)

export default router;