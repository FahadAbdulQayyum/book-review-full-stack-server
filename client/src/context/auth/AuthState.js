var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from './authReducer';
import { SIGNUP_SUCCESS, API, SIGNUP_FAIL, CLEAR_ERRORS, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, } from '../types';
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token') || null,
        // isAuthenticated: null,
        isAuthenticated: true,
        // isAuthenticated: false,
        // loading: false,
        // loading: true,
        loading: null,
        user: null,
        error: null,
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    // load User
    const loadUser = () => __awaiter(void 0, void 0, void 0, function* () {
        // console.log('localStorage.token....', localStorage.token)
        if (localStorage.token) {
            // if (localStorage.getItem('token')) {
            // console.log('localStorage.token...11', localStorage.token);
            // console.log("localStorage.getItem('token')", JSON.stringify(localStorage.getItem('token')));
            // setAuthToken(localStorage.getItem('token'));
            setAuthToken(localStorage.token);
        }
        try {
            const res = yield axios.get(`${API}/api/auth`);
            dispatch({ type: USER_LOADED, payload: res.data });
        }
        catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    });
    // Register User
    const signup = (formData) => __awaiter(void 0, void 0, void 0, function* () {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            // const res = await axios.post(`${API}/api/auth/signup`, formData, config)
            const res = yield axios.post(`${API}/api/users`, formData, config);
            // const res = await axios.post('/api/users', formData, config)
            // const res = await axios.post('/api/auth', formData, config)
            console.log('ressss', res === null || res === void 0 ? void 0 : res.data);
            dispatch({ type: SIGNUP_SUCCESS, payload: res === null || res === void 0 ? void 0 : res.data });
            loadUser();
        }
        catch (err) {
            console.log('errrrrrrr....', err);
            dispatch({
                type: SIGNUP_FAIL, payload: (err.config.message || err.response.data.msg || err.response.data)
            });
        }
    });
    // Login User
    const login = (formData) => __awaiter(void 0, void 0, void 0, function* () {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            // const res = await axios.post(`${ API } / api / auth`, formData, config)
            // const res = await axios.post('/api/auth/user/login', formData, config)
            const res = yield axios.post(`${API}/api/auth`, formData, config);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            loadUser();
        }
        catch (err) {
            dispatch({ type: LOGIN_FAIL });
        }
    });
    // Logout User
    const logout = () => {
        dispatch({
            type: LOGOUT
        });
    };
    // Clear Errors
    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
    };
    return (_jsx(authContext.Provider, { value: {
            token: state === null || state === void 0 ? void 0 : state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            signup,
            login,
            logout,
            clearErrors,
            loadUser
        }, children: props.children }));
};
export default AuthState;
