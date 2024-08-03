"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RatingStarts_1 = __importDefault(require("../ratingStars/RatingStarts"));
const bookContext_1 = __importDefault(require("../../context/book/bookContext"));
const BookItem = ({ book }) => {
    const { deleteBook, setCurrent, clearCurrent } = (0, react_1.useContext)(bookContext_1.default);
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
    return (<div className='card bg-light'>
            <h3 className='text-primary text-left'>
                <i className='fas fa-book'/> {title}
                {/* <span style={{ float: 'right' }} className={`badge ${rating < 3 ? 'badge-danger' : 'badge-success'}`}>{rating}</span> */}
                <span style={{ float: 'right', color: '#ebcc20' }}>
                    <RatingStarts_1.default rating={rating}/>
                </span>
                <br />
                <span style={{ float: 'right' }}>
                    <small className='text-xsm'>{bookReviewText}</small>
                </span>
                <ul className='list'>
                    {/* {author && ( */}
                    {/* // <i className='fas fa-envelope-open' /> */}
                    {/* <i className='fas fa-user-tie' /> {author} */}
                    {/* )} */}
                    <li>
                        <i className='fas fa-pen'/> {author}
                    </li>
                    <li>
                        <i className='fas fa-calendar-alt'/> {publicationYear}
                        {/* <i className='fas fa-calendar' /> {publicationYear} */}
                    </li>
                    <li>
                        {/* <i className='fas fa-tags' /> {genre} */}
                        {/* <i className='fas fa-tag' /> {genre} */}
                        <i className='fas fa-list'/> {genre}
                        {/* <i className='fas fa-film' /> {genre} */}
                        {/* <i className='fas fa-music' /> {genre} */}
                    </li>
                </ul>
                <p>
                    <button className='btn btn-dark btn-sm' onClick={onEdit}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
                </p>
            </h3>
        </div>);
};
exports.default = BookItem;
