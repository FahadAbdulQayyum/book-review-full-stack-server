import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import RatingStars from '../ratingStars/RatingStarts';
import ContactContext from '../../context/book/bookContext';
const BookItem = ({ book }) => {
    const { deleteBook, setCurrent, clearCurrent } = useContext(ContactContext);
    // const { id, title, author, publicationYear, genre, bookReviewText, rating } = book;
    const { _id, title, author, publicationYear, genre, bookReviewText, rating } = book;
    const onDelete = () => {
        // deleteBook(id)
        deleteBook(_id);
        clearCurrent();
        // deleteBook(id: string | undefined)
    };
    const onEdit = () => {
        setCurrent(book);
        // deleteBook(id: string | undefined)
    };
    return (_jsx("div", { className: 'card bg-light', children: _jsxs("h3", { className: 'text-primary text-left', children: [_jsx("i", { className: 'fas fa-book' }), " ", title, _jsx("span", { style: { float: 'right', color: '#ebcc20' }, children: _jsx(RatingStars, { rating: rating }) }), _jsx("br", {}), _jsx("span", { style: { float: 'right' }, children: _jsx("small", { className: 'text-xsm', children: bookReviewText }) }), _jsxs("ul", { className: 'list', children: [_jsxs("li", { children: [_jsx("i", { className: 'fas fa-pen' }), " ", author] }), _jsxs("li", { children: [_jsx("i", { className: 'fas fa-calendar-alt' }), " ", publicationYear] }), _jsxs("li", { children: [_jsx("i", { className: 'fas fa-list' }), " ", genre] })] }), _jsxs("p", { children: [_jsx("button", { className: 'btn btn-dark btn-sm', onClick: onEdit, children: "Edit" }), _jsx("button", { className: 'btn btn-danger btn-sm', onClick: onDelete, children: "Delete" })] })] }) }));
};
export default BookItem;
