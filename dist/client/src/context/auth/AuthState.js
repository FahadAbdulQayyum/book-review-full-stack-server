"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const authContext_1 = __importDefault(require("./authContext"));
const authReducer_1 = __importDefault(require("./authReducer"));
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
const setAuthToken_1 = __importDefault(require("../utils/setAuthToken"));
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
    const [state, dispatch] = (0, react_1.useReducer)(authReducer_1.default, initialState);
    // load User
    const loadUser = () => __awaiter(void 0, void 0, void 0, function* () {
        // console.log('localStorage.token....', localStorage.token)
        if (localStorage.token) {
            // if (localStorage.getItem('token')) {
            // console.log('localStorage.token...11', localStorage.token);
            // console.log("localStorage.getItem('token')", JSON.stringify(localStorage.getItem('token')));
            // setAuthToken(localStorage.getItem('token'));
            (0, setAuthToken_1.default)(localStorage.token);
        }
        try {
            const res = yield axios_1.default.get(`${types_1.API}/api/auth`);
            dispatch({ type: types_1.USER_LOADED, payload: res.data });
        }
        catch (err) {
            dispatch({ type: types_1.AUTH_ERROR });
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
            const res = yield axios_1.default.post(`${types_1.API}/api/users`, formData, config);
            // const res = await axios.post('/api/users', formData, config)
            // const res = await axios.post('/api/auth', formData, config)
            console.log('ressss', res === null || res === void 0 ? void 0 : res.data);
            dispatch({ type: types_1.SIGNUP_SUCCESS, payload: res === null || res === void 0 ? void 0 : res.data });
            loadUser();
        }
        catch (err) {
            console.log('errrrrrrr....', err);
            dispatch({
                type: types_1.SIGNUP_FAIL, payload: (err.config.message || err.response.data.msg || err.response.data)
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
            const res = yield axios_1.default.post(`${types_1.API}/api/auth`, formData, config);
            dispatch({ type: types_1.LOGIN_SUCCESS, payload: res.data });
            loadUser();
        }
        catch (err) {
            dispatch({ type: types_1.LOGIN_FAIL });
        }
    });
    // Logout User
    const logout = () => {
        dispatch({
            type: types_1.LOGOUT
        });
    };
    // Clear Errors
    const clearErrors = () => {
        dispatch({ type: types_1.CLEAR_ERRORS });
    };
    return (<authContext_1.default.Provider value={{
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
        }}>
            {props.children}
        </authContext_1.default.Provider>);
};
exports.default = AuthState;
