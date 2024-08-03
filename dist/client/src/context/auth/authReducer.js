"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
exports.default = (state, action) => {
    switch (action.type) {
        case types_1.USER_LOADED:
            return Object.assign(Object.assign({}, state), { isAuthenticated: true, loading: false, user: action.payload });
        // case LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         isAuthenticated: true,
        //         user: action.payload
        //     }
        case types_1.SIGNUP_SUCCESS:
        case types_1.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            // localStorage.setItem('token', action.payload)
            console.log('consolo', action.payload);
            return Object.assign(Object.assign(Object.assign({}, state), action.payload), { isAuthenticated: true, loading: false });
        case types_1.SIGNUP_FAIL:
        case types_1.AUTH_ERROR:
        case types_1.LOGIN_FAIL:
        case types_1.LOGOUT:
            localStorage.removeItem('token');
            return Object.assign(Object.assign({}, state), { token: null, isAuthenticated: false, loading: false, user: null, error: action.payload });
        case types_1.CLEAR_ERRORS:
            return Object.assign(Object.assign({}, state), { 
                // token: null,
                // isAuthenticated: false,
                // loading: false,
                // user: null,
                error: null });
    }
};
