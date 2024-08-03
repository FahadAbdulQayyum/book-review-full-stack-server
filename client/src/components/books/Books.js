import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useContext, useEffect } from 'react';
import BookContext from '../../context/book/bookContext';
import BookItem from './BookItem';
import Spinner from "../layout/Spinner";
const Books = () => {
    const bookContext = useContext(BookContext);
    const { books, filtered, getBooks, loading } = bookContext;
    const BookList = Array.isArray(books) ? books : [];
    useEffect(() => {
        getBooks();
        // eslint-disable-next-line
    }, []);
    if (books !== null && books.length === 0 && !loading) {
        return _jsx("h4", { children: "No Book Found, Please use form to add one" });
    }
    if ((filtered === null || filtered === void 0 ? void 0 : filtered.length) === 0) {
        return _jsx("h4", { children: "No Searched Book Found." });
    }
    return (_jsx(Fragment, { children: books !== null && !loading ? (_jsx(_Fragment, { children: 
            // filtered ? filtered?.map(book => <BookItem key={book?.id} book={book} />)
            filtered ? filtered === null || filtered === void 0 ? void 0 : filtered.map(book => _jsx(BookItem, { book: book }, book === null || book === void 0 ? void 0 : book._id))
                :
                    // BookList?.map(book => <BookItem key={book?.id} book={book} />)
                    BookList === null || BookList === void 0 ? void 0 : BookList.map(book => _jsx(BookItem, { book: book }, book === null || book === void 0 ? void 0 : book._id)) })) : _jsx(Spinner, {}) }));
};
export default Books;
