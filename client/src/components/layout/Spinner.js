import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react/jsx-runtime";
import spinner from "../../assets/spinner.gif";
const Spinner = () => {
    return (_jsx(Fragment, { children: _jsx("img", { src: spinner, style: { width: '200px', margin: 'auto', display: 'block' }, alt: 'Loading...' }) }));
};
export default Spinner;
