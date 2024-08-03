"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
// interface Action {
//     type: string;
//     payload: any;
// }
// interface State {
//     alerts: Alert[];
// }
exports.default = (state, action) => {
    switch (action.type) {
        case types_1.SET_ALERT:
            console.log('setAlertttt');
            return Object.assign(Object.assign({}, state), { alerts: [state, action.payload] });
        // return [
        //     ...state, action.payload
        //     // state,
        //     // action.payload
        // ]
        case types_1.REMOVE_ALERT:
            // return state.filter((alert: any) => alert.id !== action.payload)
            return state.alerts.filter((alert) => alert.id !== action.payload);
        default:
            return state;
    }
};
