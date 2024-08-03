import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';
const Alerts = () => {
    const { alerts } = useContext(alertContext);
    if ((alerts === null || alerts === void 0 ? void 0 : alerts.length) === 0) {
        return null; // Return null if there are no alerts
    }
    return (_jsx(_Fragment, { children: alerts === null || alerts === void 0 ? void 0 : alerts.map(alert => (_jsx("div", { className: `alert alert-${alert.type}`, children: alert === null || alert === void 0 ? void 0 : alert.msg }, alert === null || alert === void 0 ? void 0 : alert.id))) }));
};
export default Alerts;
