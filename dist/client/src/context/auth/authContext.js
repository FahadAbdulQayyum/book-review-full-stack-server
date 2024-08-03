"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// Create context with a default value
const defaultContextValue = {
    token: '',
    isAuthenticated: false,
    loading: false,
    // user: [],
    user: null,
    error: '',
    loadUser: () => { },
    // signup: (formData: formProps) => { },
    // login: (formData: formProps) => { },
    signup: () => { },
    login: () => { },
    logout: () => { },
    clearErrors: () => { },
};
const authContext = (0, react_1.createContext)(defaultContextValue);
exports.default = authContext;
