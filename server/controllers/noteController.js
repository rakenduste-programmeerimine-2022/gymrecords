const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')
const User = require('../models/User.model')

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user.id })

    res.status(200).json(notes)
})

const setNote = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }

    const note = await Note.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(note)
})

const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(note.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedNote)
})

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(note.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await note.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = { getNotes, setNote, updateNote, deleteNote }