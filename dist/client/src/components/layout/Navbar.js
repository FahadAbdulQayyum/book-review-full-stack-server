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
const react_router_dom_1 = require("react-router-dom");
const authContext_1 = __importDefault(require("../../context/auth/authContext"));
const bookContext_1 = __importDefault(require("../../context/book/bookContext"));
const Navbar = ({ title = "Book Review Management App", icon = "fas fa-id-card-alt" }) => {
    const { isAuthenticated, logout, user } = (0, react_1.useContext)(authContext_1.default);
    const { clearBooks } = (0, react_1.useContext)(bookContext_1.default);
    const onLogout = () => {
        logout();
        clearBooks();
    };
    const authLinks = (<react_1.Fragment>
      {/* <li>Hello {user && user?.name}</li> */}
      <li>Hello {user && (user === null || user === void 0 ? void 0 : user.name)}</li>
      <li>
        <a href='#!' onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </react_1.Fragment>);
    const guestLinks = (<react_1.Fragment>
      <li>
        <react_router_dom_1.Link to='/signup'>Signup</react_router_dom_1.Link>
      </li>
      <li>
        <react_router_dom_1.Link to='/login'>Login</react_router_dom_1.Link>
      </li>
    </react_1.Fragment>);
    return (<div className='navbar bg-primary'>
      <h1>
        <i className={icon}/>
        {title}
      </h1>
      <ul>
        <li>
          {isAuthenticated ? authLinks : guestLinks}
        </li>
      </ul>
    </div>);
};
exports.default = Navbar;
