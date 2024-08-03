"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book = require('../models/Book');
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// @routes GET api/books
// @desc Get all the user's books    
// @access Private
router.get('/', auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find({ user: req.rawTrailers[0] }).sort({
            date: -1
        });
        res.json(books);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    // res.send('Gell all users books')
}));
// @routes POST api/books
// @desc Add a new book    
// @access Private
router.post('/', auth, [
    check('title', 'Please enter the book title').not().isEmpty(),
    check('author', 'Please enter the book author').not().isEmpty(),
    check('publicationYear', 'Please enter the book\'s publication year').not().isEmpty(),
    check('genre', 'Please enter the book\'s genre').not().isEmpty(),
    check('bookReviewText', 'Please enter the book\'s review').not().isEmpty(),
    check('rating', 'Please enter the book\'s rating').not().isEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, author, publicationYear, genre, bookReviewText, rating } = req.body;
    try {
        const newBook = new Book({
            title,
            author,
            publicationYear,
            genre,
            bookReviewText,
            rating,
            user: req.rawTrailers[0]
        });
        const book = yield newBook.save();
        res.json(book);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    // res.send('Add a book')
}));
router.put('/:id', auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, publicationYear, genre, bookReviewText, rating } = req.body;
    console.log('req....body', req);
    const bookFields = {
        title: '',
        author: '',
        publicationYear: 0,
        genre: 'fictional',
        bookReviewText: '',
        rating: 0,
    };
    if (title)
        bookFields.title = title;
    if (author)
        bookFields.author = author;
    if (publicationYear)
        bookFields.publicationYear = publicationYear;
    if (genre)
        bookFields.genre = genre;
    if (bookReviewText)
        bookFields.bookReviewText = bookReviewText;
    if (rating)
        bookFields.rating = rating;
    try {
        // let book = new Book(bookFields)
        let book = yield Book.findById(req.params.id);
        if (!book)
            return res.status(404).json({ msg: 'This contact does not exist' });
        if (book.user.toString() !== req.rawTrailers[0])
            return res.status(403).json({ msg: 'Not authorized to update this contact' });
        book = yield Book.findByIdAndUpdate(req.params.id, { $set: bookFields }, { new: true });
        // show the updated book info
        res.json(book);
    }
    catch (err) {
        res.status(500).send('Server Error');
        console.error(err.message);
    }
    // res.send('Update a book')
}));
// @routes DELETE api/books/:id
// @desc Delete a book
// @access Private
router.delete('/:id', auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Book.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success: true, msg: 'Book deleted successfully' });
    }
    catch (err) {
        res.status(500).send('Server Error');
        console.error(err);
    }
    // res.send('Delete a book')
}));
module.exports = router;
