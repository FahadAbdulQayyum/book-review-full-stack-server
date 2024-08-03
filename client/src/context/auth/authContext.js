import { createContext } from "react";
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
const authContext = createContext(defaultContextValue);
export default authContext;
