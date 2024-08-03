import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import BookContext from "../../context/book/bookContext";
const BookForm = () => {
    const bookContext = useContext(BookContext);
    const { addBook, current, clearCurrent, updateBook } = bookContext;
    const [book, setBook] = useState({
        // id: '',
        _id: '',
        title: '',
        author: '',
        publicationYear: '',
        genre: 'fictional',
        bookReviewText: '',
        rating: 0
    });
    useEffect(() => {
        if (current !== null) {
            setBook(current);
        }
        else {
            setBook({
                // id: '',
                _id: '',
                title: '',
                author: '',
                publicationYear: '',
                genre: 'fictional',
                bookReviewText: '',
                rating: 0
            });
        }
    }, [current]);
    const { title, author, publicationYear, genre, bookReviewText, rating } = book;
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setBook({ ...book, [e.target.name]: e.target.value })
    const onChange = (e) => {
        const { name, value } = e.target;
        setBook(Object.assign(Object.assign({}, book), { 
            // [name]: name === 'rating' ? parseInt(value) : value
            [name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addBook(book);
        }
        else {
            updateBook(book);
        }
        clearAll();
        // setBook({
        //     id: '',
        //     _id: '',
        //     title: '',
        //     author: '',
        //     publicationYear: '',
        //     genre: '',
        //     bookReviewText: '',
        //     rating: 0
        // })
    };
    const clearAll = () => {
        clearCurrent();
        setBook({
            _id: '',
            // id: '',
            title: '',
            author: '',
            publicationYear: '',
            genre: 'fictional',
            bookReviewText: '',
            rating: 0
        });
    };
    return (_jsxs("form", { onSubmit: onSubmit, children: [_jsx("h2", { className: "text-primary", children: current ? 'Edit Book' : 'Add Book' }), _jsx("input", { type: "text", placeholder: "Name", name: "title", value: title, onChange: onChange }), _jsx("input", { type: "text", placeholder: "Author", name: "author", value: author, onChange: onChange }), _jsx("input", { type: "text", placeholder: "Publication year", name: "publicationYear", value: publicationYear, onChange: onChange }), _jsx("input", { type: "text", placeholder: "Book Review Text", name: "bookReviewText", value: bookReviewText, onChange: onChange }), _jsx("h5", { children: "Book Genre" }), _jsx("input", { type: "radio", name: "genre", 
                // value={genre}
                value: 'Fictional', checked: genre.toLowerCase() === "fictional", onChange: onChange }), ' ', "Fictional", ' ', _jsx("input", { type: "radio", name: "genre", value: 'RealLife', checked: genre.toLowerCase() === "reallife", onChange: onChange }), ' ', "RealLife", _jsx("h5", { children: "Rating" }), _jsx("input", { type: "number", placeholder: "rating", name: "rating", value: rating, onChange: onChange }), _jsx("div", { children: _jsx("input", { type: "submit", value: current ? "Update Book" : "Add Book", className: "btn btn-primary btn-block" }) }), current && _jsx("div", { children: _jsx("input", { type: "submit", value: "Clear", onClick: clearAll, className: "btn btn-dark btn-block" }) })] }));
};
export default BookForm;
