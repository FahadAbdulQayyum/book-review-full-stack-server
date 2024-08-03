"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const uuid_1 = require("uuid");
const alertContext_1 = __importDefault(require("./alertContext"));
const alertReducer_1 = __importDefault(require("./alertReducer"));
const types_1 = require("../types");
const AlertState = props => {
    // const initialState: any = []
    const initialState = {
        alerts: []
    };
    const [state, dispatch] = (0, react_1.useReducer)(alertReducer_1.default, initialState);
    // load User
    // Register User
    // Login User
    // Logout User
    // Clear Errors
    // const setAlert = (msg: string, type: string) => dispatch({ type: SET_ALERT, payload: { msg, type } });
    // const removeAlert = () => dispatch({ type: REMOVE_ALERT });
    // Set the alert
    const setAlert = (msg, type, timeout = 2000) => {
        const id = (0, uuid_1.v4)();
        dispatch({ type: types_1.SET_ALERT, payload: { id, msg, type } });
        setTimeout(() => {
            dispatch({ type: types_1.REMOVE_ALERT, payload: id });
        }, timeout);
    };
    return (<alertContext_1.default.Provider value={{
            alerts: state.alerts,
            setAlert,
        }}>
            {props.children}
        </alertContext_1.default.Provider>);
};
exports.default = AlertState;
