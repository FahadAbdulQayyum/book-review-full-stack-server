import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from "react";
import { v4 as uuid } from 'uuid';
import alertContext from "./alertContext";
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT, } from '../types';
const AlertState = props => {
    // const initialState: any = []
    const initialState = {
        alerts: []
    };
    const [state, dispatch] = useReducer(alertReducer, initialState);
    // load User
    // Register User
    // Login User
    // Logout User
    // Clear Errors
    // const setAlert = (msg: string, type: string) => dispatch({ type: SET_ALERT, payload: { msg, type } });
    // const removeAlert = () => dispatch({ type: REMOVE_ALERT });
    // Set the alert
    const setAlert = (msg, type, timeout = 2000) => {
        const id = uuid();
        dispatch({ type: SET_ALERT, payload: { id, msg, type } });
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, payload: id });
        }, timeout);
    };
    return (_jsx(alertContext.Provider, { value: {
            alerts: state.alerts,
            setAlert,
        }, children: props.children }));
};
export default AlertState;
