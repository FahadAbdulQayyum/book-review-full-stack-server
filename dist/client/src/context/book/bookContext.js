"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// interface BookContextType {
//     books: Book[];
//     addBook: (book: Book) => void;
//     deleteBook: (id: number) => void;
//     setCurrent: (book: Book) => void;
//     clearCurrent: () => void;
//     updateBook: (book: Book) => void;
//     filterBook: (text: string) => void;
//     setAlert: (msg: string, type: string) => void;
//     removeAlert: () => void;
// }
// Create context with a default value
const defaultContextValue = {
    books: [],
    // current: [],
    // current: '',
    current: null,
    error: null,
    loading: null,
    getBooks: () => { },
    addBook: () => { },
    deleteBook: () => { },
    clearBooks: () => { },
    setCurrent: () => { },
    clearCurrent: () => { },
    updateBook: () => { },
    filterBook: () => { },
    filtered: [],
    clearFilter: () => { },
    setAlert: () => { },
    removeAlert: () => { }
};
// const bookContext = createContext<BookState>(defaultContextValue);
const bookContext = (0, react_1.createContext)(defaultContextValue);
exports.default = bookContext;
