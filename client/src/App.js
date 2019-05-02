import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
//import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ReviewForm from "./pages/ReviewForm";
import NavTabs from './components/Navbar/Navbar';
import Maps from './pages/Maps';
import '../../client/src/App.css'
// import Landing from "./components/temp/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./private-route/PrivateRoute";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store} >

        <div className="App">
          <Router>
            <NavTabs />
            <h1 className="text-align: center">Welcome to Wanderlust!</h1>
            {/* <Landing /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/map" component={Maps} />
            <Switch>
              <PrivateRoute exact path="/reviewform" component={ReviewForm} />
            </Switch>
          </Router>
        </div>

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
      </Provider>
    );
  }
}

export default App;
