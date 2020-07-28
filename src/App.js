import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="blue">
        <div className="container">
          <div className="nav-wrapper" id="nav-top">
            <a href="#" className="logo left">
              Multi-App
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
