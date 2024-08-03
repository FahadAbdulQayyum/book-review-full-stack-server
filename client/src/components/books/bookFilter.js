import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect, useRef } from 'react';
import BookContext from '../../context/book/bookContext';
const BookFilter = () => {
    const { filterBook, clearFilter, filtered } = useContext(BookContext);
    const text = useRef(null);
    useEffect(() => {
        if (filtered === null) { }
    }, []);
    const onChange = (e) => {
        e.preventDefault();
        if (text.current && text.current.value !== '') {
            // const value: string = text.current.valueOf()
            // filterBook(value);
            filterBook(text.current.value);
        }
        else {
            clearFilter();
        }
    };
    return (_jsx("form", { children: _jsx("input", { type: "text", ref: text, placeholder: 'Search Book', onChange: onChange }) }));
};
export default BookFilter;
