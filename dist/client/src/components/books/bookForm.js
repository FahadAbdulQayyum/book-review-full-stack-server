"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bookContext_1 = __importDefault(require("../../context/book/bookContext"));
const BookForm = () => {
    const bookContext = (0, react_1.useContext)(bookContext_1.default);
    const { addBook, current, clearCurrent, updateBook } = bookContext;
    const [book, setBook] = (0, react_1.useState)({
        // id: '',
        _id: '',
        title: '',
        author: '',
        publicationYear: '',
        genre: 'fictional',
        bookReviewText: '',
        rating: 0
    });
    (0, react_1.useEffect)(() => {
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
    return (<form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Book' : 'Add Book'}</h2>
            {/* <h2 className="text-primary">Add Book</h2> */}
            <input type="text" placeholder="Name" name="title" value={title} onChange={onChange}/>
            <input type="text" placeholder="Author" name="author" value={author} onChange={onChange}/>
            <input type="text" placeholder="Publication year" name="publicationYear" value={publicationYear} onChange={onChange}/>
            <input type="text" placeholder="Book Review Text" name="bookReviewText" value={bookReviewText} onChange={onChange}/>
            <h5>Book Genre</h5>
            <input type="radio" name="genre" 
    // value={genre}
    value={'Fictional'} checked={genre.toLowerCase() === "fictional"} onChange={onChange}/>{' '}Fictional
            {' '}
            <input type="radio" name="genre" value={'RealLife'} checked={genre.toLowerCase() === "reallife"} onChange={onChange}/>{' '}RealLife
            {/* <div style={{ color: '#ebcc20' }}>
            <RatingStars rating={4} />
        </div> */}
            <h5>Rating</h5>
            <input type="number" placeholder="rating" name="rating" value={rating} onChange={onChange}/>
            <div>
                {/* <input type="submit" value={"Add Book"} className="btn btn-primary btn-block" /> */}
                <input type="submit" value={current ? "Update Book" : "Add Book"} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                {/* <input type="submit" value={"Clear"} onClick={() => clearCurrent()} className="btn btn-dark btn-block" /> */}
                <input type="submit" value={"Clear"} onClick={clearAll} className="btn btn-dark btn-block"/>
            </div>}
        </form>);
};
exports.default = BookForm;
