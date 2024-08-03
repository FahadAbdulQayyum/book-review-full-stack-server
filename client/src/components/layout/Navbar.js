import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BookContext from '../../context/book/bookContext';
const Navbar = ({ title = "Book Review Management App", icon = "fas fa-id-card-alt" }) => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const { clearBooks } = useContext(BookContext);
    const onLogout = () => {
        logout();
        clearBooks();
    };
    const authLinks = (_jsxs(Fragment, { children: [_jsxs("li", { children: ["Hello ", user && (user === null || user === void 0 ? void 0 : user.name)] }), _jsx("li", { children: _jsxs("a", { href: '#!', onClick: onLogout, children: [_jsx("i", { className: "fas fa-sign-out-alt" }), _jsx("span", { className: 'hide-sm', children: "Logout" })] }) })] }));
    const guestLinks = (_jsxs(Fragment, { children: [_jsx("li", { children: _jsx(Link, { to: '/signup', children: "Signup" }) }), _jsx("li", { children: _jsx(Link, { to: '/login', children: "Login" }) })] }));
    return (_jsxs("div", { className: 'navbar bg-primary', children: [_jsxs("h1", { children: [_jsx("i", { className: icon }), title] }), _jsx("ul", { children: _jsx("li", { children: isAuthenticated ? authLinks : guestLinks }) })] }));
};
export default Navbar;
