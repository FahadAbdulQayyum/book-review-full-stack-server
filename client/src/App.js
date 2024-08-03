import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookState from './context/book/BookState';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AlertState from './context/alert/AlertState';
import setAuthToken from './context/utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
// import AuthContext from './context/auth/authContext';
const App = () => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    ;
    // const { isAuthenticated } = useContext(AuthContext)
    return (_jsx(AuthState, { children: _jsx(BookState, { children: _jsx(AlertState, { children: _jsx(Router, { children: _jsxs(Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "container", children: [_jsx(Alerts, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/login', element: _jsx(Login, {}) }), _jsx(Route, { path: '/signup', element: _jsx(Register, {}) }), _jsxs(Route, { path: '/', element: _jsx(PrivateRoute, {}), children: [_jsx(Route, { path: '/', element: _jsx(Home, {}) }), _jsx(Route, { path: '/about', element: _jsx(About, {}) })] })] })] })] }) }) }) }) }));
};
export default App;
