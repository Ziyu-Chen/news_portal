import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
