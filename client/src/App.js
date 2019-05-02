import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm"
import SignupForm from "./pages/SignupForm"
import ReviewForm from "./pages/ReviewForm"
import NavTabs from './components/Navbar/Navbar';
import '../../client/src/App.css'



function App() {
  return (
    <div className="App">
      <NavTabs />

      <Router>

        <h1 className="text-align: center">Welcome to Wanderlust!</h1>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/review" component={ReviewForm} />

      </Router>
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
    </div>
  );
}

export default App;
