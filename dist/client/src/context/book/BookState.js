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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bookContext_1 = __importDefault(require("./bookContext"));
const bookReducer_1 = __importDefault(require("./bookReducer"));
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
const BookState = props => {
    const initialState = {
        books: [
        // {
        //     // id: 0,
        //     id: '0',
        //     title: 'Flying Kites0',
        //     author: 'Khalid Hossein0',
        //     publicationYear: '2021',
        //     genre: 'RealLife',
        //     bookReviewText: 'By the way it teaches you the emotions!',
        //     rating: 4
        // },
        // {
        //     // id: 1,
        //     id: '1',
        //     title: 'Flying Kites',
        //     author: 'Khalid Hossein',
        //     publicationYear: '2021',
        //     genre: 'Fictional',
        //     bookReviewText: 'Great Book!',
        //     rating: 2
        // },
        // {
        //     // id: 2,
        //     id: '2',
        //     title: 'Flying Kites1',
        //     author: 'Khalid Hossein1',
        //     publicationYear: '2022',
        //     genre: 'Fictional',
        //     bookReviewText: 'Great Book!1',
        //     rating: 3
        // }
        ],
        current: null,
        filtered: null,
        error: null,
        loading: null,
    };
    const [state, dispatch] = (0, react_1.useReducer)(bookReducer_1.default, initialState);
    // Define functions to dispatch actions
    const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
        // book.id = uuid();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            // const res = await axios.get('api/books', config)
            const res = yield axios_1.default.get(`${types_1.API}/api/books`, config);
            dispatch({ type: types_1.GET_BOOKS, payload: res.data });
        }
        catch (err) {
            // dispatch({ type: BOOK_ERROR, payload: err.response.msg })
            dispatch({ type: types_1.BOOK_ERROR, payload: (err.response.data.msg || err.response.msg) });
        }
    });
    // Define functions to dispatch actions
    const addBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
        // book.id = uuid();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            // const res = await axios.post('api/books', book, config)
            const res = yield axios_1.default.post(`${types_1.API}/api/books`, book, config);
            console.log('ressss..addbook', res);
            dispatch({ type: types_1.ADD_BOOK, payload: res.data });
        }
        catch (err) {
            // dispatch({ type: BOOK_ERROR, payload: err.response.msg })
            dispatch({ type: types_1.BOOK_ERROR, payload: (err.response.data.msg || err.response.msg) });
        }
    });
    // const deleteBook = (id: string) => {
    const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
        // const deleteBook = (id: string | undefined) => {
        // dispatch({ type: DELETE_BOOK, payload: id });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            // await axios.delete(`api/contacts/${id}`, config)
            yield axios_1.default.delete(`${types_1.API}/api/books/${id}`, config);
            dispatch({ type: types_1.DELETE_BOOK, payload: id });
        }
        catch (err) {
            console.log(err);
        }
    });
    // const updateBook = (book: Book) => dispatch({ type: UPDATE_BOOK, payload: book });
    // const updateBook = (book: Book) => {
    const updateBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // const res = await axios.put(`api/contacts/${book._id}`, config)
        const res = yield axios_1.default.put(`${types_1.API}/api/books/${book._id}`, book, config);
        // const res = await axios.put(`api / contacts / ${ book.id }`, config)
        console.log('erssupdaed', res);
        dispatch({ type: types_1.UPDATE_BOOK, payload: res.data });
    });
    const setCurrent = (book) => dispatch({ type: types_1.SET_CURRENT, payload: book });
    const clearCurrent = () => dispatch({ type: types_1.CLEAR_CURRENT });
    const filterBook = (text) => dispatch({ type: types_1.FILTER_BOOK, payload: text });
    const clearBooks = () => dispatch({ type: types_1.CLEAR_BOOKS });
    const clearFilter = () => dispatch({ type: types_1.CLEAR_FILTER });
    // const setAlert = (msg: string, type: string) => dispatch({ type: SET_ALERT, payload: { msg, type } });
    // const removeAlert = () => dispatch({ type: REMOVE_ALERT });
    // Add a book
    // Delete a book
    // Set Current Book
    // Clear Current Book
    // Update Book
    // Filter Book
    // Clear Filter
    return (<bookContext_1.default.Provider value={{
            books: state.books,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            loading: state.loading,
            getBooks,
            addBook,
            deleteBook,
            clearBooks,
            setCurrent,
            clearCurrent,
            updateBook,
            filterBook,
            clearFilter,
            // setAlert,
            // removeAlert,
            // addBook: (book: any) => dispatch({ type: ADD_BOOK, payload: book }),
            // deleteBook: (id: number) => dispatch({ type: DELETE_BOOK, payload: id }),
            // setCurrent: (book: any) => dispatch({ type: SET_CURRENT, payload: book }),
            // clearCurrent: () => dispatch({ type: CLEAR_CURRENT }),
            // updateBook: (book: any) => dispatch({ type: UPDATE_BOOK, payload: book }),
            // filterBook: (text: string) => dispatch({ type: FILTER_BOOK, payload: text }),
            // setAlert: (msg: string, type: string) => dispatch({ type: SET_ALERT, payload: { msg, type } }),
            // removeAlert: () => dispatch({ type: REMOVE_ALERT })
        }}>
            {props.children}
        </bookContext_1.default.Provider>);
};
exports.default = BookState;
