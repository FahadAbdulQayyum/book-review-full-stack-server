"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const BookState_1 = __importDefault(require("./context/book/BookState"));
const Navbar_1 = __importDefault(require("./components/layout/Navbar"));
const Home_1 = __importDefault(require("./components/layout/pages/Home"));
const About_1 = __importDefault(require("./components/layout/pages/About"));
const AuthState_1 = __importDefault(require("./context/auth/AuthState"));
const Register_1 = __importDefault(require("./components/auth/Register"));
const Login_1 = __importDefault(require("./components/auth/Login"));
const Alerts_1 = __importDefault(require("./components/layout/Alerts"));
const AlertState_1 = __importDefault(require("./context/alert/AlertState"));
const setAuthToken_1 = __importDefault(require("./context/utils/setAuthToken"));
const PrivateRoute_1 = __importDefault(require("./components/routing/PrivateRoute"));
// import AuthContext from './context/auth/authContext';
const App = () => {
    if (localStorage.token) {
        (0, setAuthToken_1.default)(localStorage.token);
    }
    ;
    // const { isAuthenticated } = useContext(AuthContext)
    return (<AuthState_1.default>
      <BookState_1.default>
        <AlertState_1.default>
          <react_router_dom_1.BrowserRouter>
            <react_1.Fragment>
              <Navbar_1.default />
              <div className="container">
                <Alerts_1.default />
                <react_router_dom_1.Routes>

                  {/* <PrivateRoute>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </PrivateRoute> */}

                  {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/' element={<PrivateRoute element={< Home />} />} />
        <Route path='/about' element={<PrivateRoute element={<About />} />} /> */}

                  <react_router_dom_1.Route path='/login' element={<Login_1.default />}/>
                  <react_router_dom_1.Route path='/signup' element={<Register_1.default />}/>
                  <react_router_dom_1.Route path='/' element={<PrivateRoute_1.default />}>
                    <react_router_dom_1.Route path='/' element={<Home_1.default />}/>
                    <react_router_dom_1.Route path='/about' element={<About_1.default />}/>
                  </react_router_dom_1.Route>


                  {/* <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} /> */}

                  {/* Private routes starts*/}
                  {/* <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Route> */}
                  {/* Private routes ends*/}

                </react_router_dom_1.Routes>
              </div>
            </react_1.Fragment>
          </react_router_dom_1.BrowserRouter>
        </AlertState_1.default>
      </BookState_1.default>
    </AuthState_1.default>);
};
exports.default = App;
