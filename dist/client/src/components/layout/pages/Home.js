"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bookFilter_1 = __importDefault(require("../../books/bookFilter"));
const bookForm_1 = __importDefault(require("../../books/bookForm"));
const Books_1 = __importDefault(require("../../books/Books"));
const authContext_1 = __importDefault(require("../../../context/auth/authContext"));
const Home = () => {
    const { loadUser } = (0, react_1.useContext)(authContext_1.default);
    (0, react_1.useEffect)(() => {
        loadUser(); // When the component mounts, load user data from the server.
    }, []);
    return (<div className='grid-2'>
            <div>
                <bookForm_1.default />
            </div>
            <div>
                <bookFilter_1.default />
                <Books_1.default />
            </div>
        </div>);
};
exports.default = Home;
