"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bookContext_1 = __importDefault(require("../../context/book/bookContext"));
const BookFilter = () => {
    const { filterBook, clearFilter, filtered } = (0, react_1.useContext)(bookContext_1.default);
    const text = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (filtered === null) { }
    }, []);
    const onChange = (e) => {
        e.preventDefault();
        if (text.current && text.current.value !== '') {
            // const value: string = text.current.valueOf()
            // filterBook(value);
            filterBook(text.current.value);
        }
        else {
            clearFilter();
        }
    };
    return (<form>
            <input type="text" ref={text} placeholder='Search Book' onChange={onChange}/>
        </form>);
};
exports.default = BookFilter;
