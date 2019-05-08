import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import ReviewForm from "./pages/ReviewForm";
import NavTabs from './components/Navbar/Navbar';
import Maps from './pages/Maps';
import '../../client/src/App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./private-route/PrivateRoute";
import Review from "./pages/Review";
import ReviewList from "./pages/ReviewList";
import Profile from "./pages/Profile";
// import Sidebar from './components/Sidenav/Sidenav';

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
      <Provider store={store}>

        <div className="App">
          <Router>
            <NavTabs logout={logoutUser()} />
            <h1 className="text-align: center">Welcome to Wanderlust!</h1>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/map" component={Maps} />
            <Route path="/reviewlist/:id" component={ReviewList} />
            <Route path="/review/:id" component={Review} />
            <Switch>
              <PrivateRoute exact path="/reviewform" component={ReviewForm} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </div>

      </Provider>
    );
  }
}

export default App;
