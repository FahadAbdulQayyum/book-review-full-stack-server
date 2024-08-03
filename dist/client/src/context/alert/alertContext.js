"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// Create context with a default value
const defaultContextValue = {
    alerts: [],
    setAlert: () => { },
    // removeAlert: () => { },
};
const alertContext = (0, react_1.createContext)(defaultContextValue);
exports.default = alertContext;
