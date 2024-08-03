"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bookContext_1 = __importDefault(require("../../context/book/bookContext"));
const BookItem_1 = __importDefault(require("./BookItem"));
const Spinner_1 = __importDefault(require("../layout/Spinner"));
const Books = () => {
    const bookContext = (0, react_1.useContext)(bookContext_1.default);
    const { books, filtered, getBooks, loading } = bookContext;
    const BookList = Array.isArray(books) ? books : [];
    (0, react_1.useEffect)(() => {
        getBooks();
        // eslint-disable-next-line
    }, []);
    if (books !== null && books.length === 0 && !loading) {
        return <h4>No Book Found, Please use form to add one</h4>;
    }
    if ((filtered === null || filtered === void 0 ? void 0 : filtered.length) === 0) {
        return <h4>No Searched Book Found.</h4>;
    }
    return (<react_1.Fragment>
            {/* {books.map(book => <BookItem key={book.id} book={book} />)} */}
            {/* {
            filtered ? filtered?.map(book => <BookItem key={book?.id} book={book} />)
                :
                books?.map(book => <BookItem key={book?.id} book={book} />)
        } */}

            {books !== null && !loading ? (<>
                    {
            // filtered ? filtered?.map(book => <BookItem key={book?.id} book={book} />)
            filtered ? filtered === null || filtered === void 0 ? void 0 : filtered.map(book => <BookItem_1.default key={book === null || book === void 0 ? void 0 : book._id} book={book}/>)
                :
                    // BookList?.map(book => <BookItem key={book?.id} book={book} />)
                    BookList === null || BookList === void 0 ? void 0 : BookList.map(book => <BookItem_1.default key={book === null || book === void 0 ? void 0 : book._id} book={book}/>)}
                </>) : <Spinner_1.default />}
        </react_1.Fragment>);
};
exports.default = Books;
