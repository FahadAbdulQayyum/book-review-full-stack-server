"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
exports.default = (state, action) => {
    switch (action.type) {
        case types_1.GET_BOOKS:
            return Object.assign(Object.assign({}, state), { books: action.payload, loading: false });
        case types_1.ADD_BOOK:
            return Object.assign(Object.assign({}, state), { books: [...state.books, action.payload] });
        case types_1.UPDATE_BOOK:
            return Object.assign(Object.assign({}, state), { books: state.books.map((book) => book._id === action.payload._id ? action.payload : book) });
        case types_1.DELETE_BOOK:
            console.log('onDeletedddd!!!!');
            return Object.assign(Object.assign({}, state), { 
                // books: state.books.filter((book: Book) => book.id !== action.payload),
                books: state.books.filter((book) => book._id !== action.payload) });
        case types_1.SET_CURRENT:
            return Object.assign(Object.assign({}, state), { current: action.payload });
        case types_1.CLEAR_CURRENT:
            return Object.assign(Object.assign({}, state), { current: null });
        case types_1.FILTER_BOOK:
            return Object.assign(Object.assign({}, state), { filtered: state.books.filter((book) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    console.log('updaebook...', book);
                    // return book.name.match(regex) || book.author.match(regex) || book.genre.match(regex) || book.publicationYear.match(regex);
                    return book.title.match(regex) || book.author.match(regex) || book.genre.match(regex) || book.publicationYear.toString().match(regex);
                }) });
        case types_1.CLEAR_BOOKS:
            return Object.assign(Object.assign({}, state), { books: null, filtered: null, error: null, current: null });
        case types_1.CLEAR_FILTER:
            return Object.assign(Object.assign({}, state), { filtered: null });
        case types_1.BOOK_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.payload });
        case types_1.BOOK_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.payload });
        default:
            return state;
    }
};
