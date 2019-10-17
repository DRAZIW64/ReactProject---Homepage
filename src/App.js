import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import About from "./sites/aboutme";
import Projects from "./sites/projects";
import Home from "./sites/home";
import Contacts from "./sites/contact";


import "./index.css";

const App = () => (
  <div className="Trial">
    <Nav />
    <div className="container">
      <Route exact={true} path="/home" component={Home} /> 
      <Route exaxt path="/aboutme" component={About} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/projects" component={Projects} />
      
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);



