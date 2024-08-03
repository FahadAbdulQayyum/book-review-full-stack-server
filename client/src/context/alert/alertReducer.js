import { SET_ALERT, REMOVE_ALERT } from "../types";
// interface Action {
//     type: string;
//     payload: any;
// }
// interface State {
//     alerts: Alert[];
// }
export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            console.log('setAlertttt');
            return Object.assign(Object.assign({}, state), { alerts: [state, action.payload] });
        // return [
        //     ...state, action.payload
        //     // state,
        //     // action.payload
        // ]
        case REMOVE_ALERT:
            // return state.filter((alert: any) => alert.id !== action.payload)
            return state.alerts.filter((alert) => alert.id !== action.payload);
        default:
            return state;
    }
};
