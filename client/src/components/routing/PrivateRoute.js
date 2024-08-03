import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
const PrivateRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login" });
};
export default PrivateRoute;
