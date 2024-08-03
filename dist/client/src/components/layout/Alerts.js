"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const alertContext_1 = __importDefault(require("../../context/alert/alertContext"));
const Alerts = () => {
    const { alerts } = (0, react_1.useContext)(alertContext_1.default);
    if ((alerts === null || alerts === void 0 ? void 0 : alerts.length) === 0) {
        return null; // Return null if there are no alerts
    }
    return (<>
            {alerts === null || alerts === void 0 ? void 0 : alerts.map(alert => (<div key={alert === null || alert === void 0 ? void 0 : alert.id} className={`alert alert-${alert.type}`}>
                        {alert === null || alert === void 0 ? void 0 : alert.msg}
                    </div>))}
        </>);
};
exports.default = Alerts;
// import { useContext } from 'react'
// import AlertContext from '../../context/alert/alertContext'
// const { alerts } = useContext(AlertContext)
// const Alerts = () => {
//     return (
//         alerts.length > 0 && alerts.map((alert: any) => {
//             <div key={alert.id}>
//                 <div className={`alert alert-${alert.type}`}>
//                     <i className="fas fa-info-circle" />
//                     {alert.msg}
//                 </div>
//             </div>
//         })
//     )
// }
// export default Alerts
