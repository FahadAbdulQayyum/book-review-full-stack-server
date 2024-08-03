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
const react_router_dom_1 = require("react-router-dom");
const Login = (props) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { setAlert } = (0, react_1.useContext)(alertContext_1.default);
    const { login, error, clearErrors, isAuthenticated } = (0, react_1.useContext)(authContext_1.default);
    (0, react_1.useEffect)(() => {
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
    const [user, setUser] = (0, react_1.useState)({
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
    return (<div className='form-container'>
            <h1>User Login</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter your email' value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter your password' value={password} onChange={onChange}/>
                </div>
                <input type='submit' value={"Submit"} className='btn btn-primary btn-block'/>
            </form>
        </div>);
};
exports.default = Login;
