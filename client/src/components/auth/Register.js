import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
const Register = (props) => {
    const { setAlert } = useContext(AlertContext);
    const { signup, error, clearErrors, isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        var _a;
        if (isAuthenticated) {
            (_a = props === null || props === void 0 ? void 0 : props.history) === null || _a === void 0 ? void 0 : _a.push('/');
        }
        if (error === 'A User with this email already exists.') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // else {
        //     setAlert(error, 'danger')
        // }
        setTimeout(() => {
            clearErrors();
        }, 5000);
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    });
    const { name, email, password, cpassword } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmittteeeeddd!', name, email, password);
        if (name === '' || email === '' || password === '') {
            setAlert('Please fill all fields', 'danger');
        }
        else if (password !== cpassword) {
            setAlert('Password is incorrect', 'danger');
        }
        else {
            console.log('userrrrr.....', user);
            signup(user);
            setAlert('User Registered', 'success');
        }
    };
    return (_jsxs("div", { className: 'form-container', children: [_jsx("h1", { children: "User Registration" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", name: 'name', placeholder: 'Enter your name', value: name, onChange: onChange })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "text", name: 'email', placeholder: 'Enter your email', value: email, onChange: onChange })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { type: "password", name: 'password', placeholder: 'Enter your password', value: password, onChange: onChange, minLength: 6 })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "cpassword", children: "Confirm Password" }), _jsx("input", { type: "password", name: 'cpassword', placeholder: 'Enter your password again', value: cpassword, onChange: onChange, minLength: 6 })] }), _jsx("input", { type: 'submit', value: "Submit", className: 'btn btn-primary btn-block' })] })] }));
};
export default Register;
