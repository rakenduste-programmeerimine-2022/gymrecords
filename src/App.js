import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Main from "./components/main.js";
import Acheivements from "./components/achievements.js";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/log-in"}>
              Gymrecords
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/log-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/MAIN"}>
                    main
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ACHIEVEMENTS"}>
                    Acheivements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/log-in" element={<Login />} />
              <Route
                path="/sign-up"
                element={!user ? <SignUp /> : <Navigate to="/" />}
              />
              <Route path="/MAIN" element={<Main />} />
              <Route path="/ACHIEVEMENTS" element={<Acheivements />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;
