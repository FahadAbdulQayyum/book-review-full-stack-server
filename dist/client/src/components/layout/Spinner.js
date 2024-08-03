"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const spinner_gif_1 = __importDefault(require("../../assets/spinner.gif"));
const Spinner = () => {
    return (<jsx_runtime_1.Fragment>
            <img src={spinner_gif_1.default} style={{ width: '200px', margin: 'auto', display: 'block' }} alt='Loading...'/>
        </jsx_runtime_1.Fragment>);
};
exports.default = Spinner;
