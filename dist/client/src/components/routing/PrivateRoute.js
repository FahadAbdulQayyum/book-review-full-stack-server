"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const authContext_1 = __importDefault(require("../../context/auth/authContext"));
const PrivateRoute = () => {
    const { isAuthenticated } = (0, react_1.useContext)(authContext_1.default);
    return isAuthenticated ? <react_router_dom_1.Outlet /> : <react_router_dom_1.Navigate to="/login"/>;
};
exports.default = PrivateRoute;
// // PrivateRoute.tsx
// import React, { useContext } from 'react';
// import { Route, Navigate, RouteProps } from 'react-router-dom';
// import AuthContext from '../../context/auth/authContext';
// // interface PrivateRouteProps extends RouteProps {
// interface PrivateRouteProps {
//     element: React.ReactElement;
// }
// const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
//     const { isAuthenticated, loading } = useContext(AuthContext);
//     if (loading) {
//         // Optionally render a loading spinner or similar
//         return <div>Loading...</div>;
//     }
//     return (
//         <Route
//             {...rest}
//             element={isAuthenticated ? element : <Navigate to="/login" />}
//         />
//     );
// };
// export default PrivateRoute;
// // // PrivateRoute.tsx
// // import React from 'react';
// // import { Navigate, Outlet } from 'react-router-dom';
// // // Define a type for your authentication status
// // interface PrivateRouteProps {
// //     isAuthenticated: boolean;
// // }
// // const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
// //     return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// // };
// // export default PrivateRoute;
// // import React, { useContext, ReactNode } from 'react';
// // import { Route, Navigate, useLocation, useRoutes } from 'react-router-dom';
// // import AuthContext from '../../context/auth/authContext';
// // interface PrivateRouteProps {
// //     element: ReactNode;
// //     // path: string;
// // }
// // // const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
// // const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
// //     const { isAuthenticated, loading } = useContext(AuthContext);
// //     const location = useLocation();
// //     if (loading) return <div>Loading...</div>;
// //     const routes = [
// //         {
// //             // path,
// //             element: isAuthenticated ? (
// //                 element
// //             ) : (
// //                 <Navigate to='/login' state={{ from: location }} replace />
// //             )
// //         }
// //     ];
// //     return useRoutes(routes);
// // };
// // export default PrivateRoute;
// // // import React, { useContext, ReactNode } from 'react';
// // // import { Route, Navigate, useLocation, RouteProps } from 'react-router-dom';
// // // import AuthContext from '../../context/auth/authContext';
// // // interface PrivateRouteProps extends RouteProps {
// // //     element: ReactNode;
// // // }
// // // const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
// // //     const { isAuthenticated, loading } = useContext(AuthContext);
// // //     const location = useLocation();
// // //     if (loading) return <div>Loading...</div>;
// // //     return isAuthenticated ? (
// // //         <Route {...rest} element={element} />
// // //     ) : (
// // //         <Navigate to='/login' state={{ from: location }} replace />
// // //     );
// // // };
// // // export default PrivateRoute;
// // // // import { useContext } from 'react'
// // // // import AuthContext from '../../context/auth/authContext'
// // // // // import { Route, Redirect } from 'react-router-dom'
// // // // import { Route, Navigate } from 'react-router-dom'
// // // // const PrivateRoute = ({ component: Component, ...rest }) => {
// // // //     const { isAuthenticated, loading } = useContext(AuthContext)
// // // //     return (
// // // //         <div>
// // // //             <Route
// // // //                 {...rest}
// // // //                 render={props === !isAuthenticated && !loading ? (
// // // //                     <Redirect to='login' />
// // // //                 )}:(
// // // //             <Component {...props} />
// // // //             )
// // // //             />
// // // //         </div>
// // // //     )
// // // // }
// // // // export default PrivateRoute
