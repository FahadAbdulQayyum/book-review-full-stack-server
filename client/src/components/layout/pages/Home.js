import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import BookFilter from '../../books/bookFilter';
import BookForm from '../../books/bookForm';
import Books from '../../books/Books';
import AuthContext from '../../../context/auth/authContext';
const Home = () => {
    const { loadUser } = useContext(AuthContext);
    useEffect(() => {
        loadUser(); // When the component mounts, load user data from the server.
    }, []);
    return (_jsxs("div", { className: 'grid-2', children: [_jsx("div", { children: _jsx(BookForm, {}) }), _jsxs("div", { children: [_jsx(BookFilter, {}), _jsx(Books, {})] })] }));
};
export default Home;
