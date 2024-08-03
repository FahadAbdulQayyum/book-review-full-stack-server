import { createContext } from "react";
// Create context with a default value
const defaultContextValue = {
    alerts: [],
    setAlert: () => { },
    // removeAlert: () => { },
};
const alertContext = createContext(defaultContextValue);
export default alertContext;
