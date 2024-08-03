"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const alertContext_1 = __importDefault(require("../../context/alert/alertContext"));
const authContext_1 = __importDefault(require("../../context/auth/authContext"));
const Register = (props) => {
    const { setAlert } = (0, react_1.useContext)(alertContext_1.default);
    const { signup, error, clearErrors, isAuthenticated } = (0, react_1.useContext)(authContext_1.default);
    (0, react_1.useEffect)(() => {
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
    const [user, setUser] = (0, react_1.useState)({
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
    return (<div className='form-container'>
            <h1>User Registration</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter your email' value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter your password' value={password} onChange={onChange} minLength={6}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name='cpassword' placeholder='Enter your password again' value={cpassword} onChange={onChange} minLength={6}/>
                </div>
                <input type='submit' value={"Submit"} className='btn btn-primary btn-block'/>
            </form>
            {/* {error && <small className='btn btn-dark btn-block'>{error}</small>} */}
        </div>);
};
exports.default = Register;
