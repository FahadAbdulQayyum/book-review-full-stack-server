import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate();
    const { setAlert } = useContext(AlertContext);
    const { login, error, clearErrors, isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        if (isAuthenticated) {
            // console.log('I\'m in login pageee', props)
            console.log('I\'m in login pageee');
            // props?.history?.push('/')
            navigate('/');
        }
        if (error === '') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
        // }, [])
    }, [error, isAuthenticated, props === null || props === void 0 ? void 0 : props.history]);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmittteeeeddd!', email, password);
        if (email === '' || password === '') {
            setAlert('Please fill all fields', 'danger');
        }
        else {
            login(user);
            setAlert('Logged in successfully!', 'success');
        }
    };
    return (_jsxs("div", { className: 'form-container', children: [_jsx("h1", { children: "User Login" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "text", name: 'email', placeholder: 'Enter your email', value: email, onChange: onChange })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { type: "password", name: 'password', placeholder: 'Enter your password', value: password, onChange: onChange })] }), _jsx("input", { type: 'submit', value: "Submit", className: 'btn btn-primary btn-block' })] })] }));
};
export default Login;
