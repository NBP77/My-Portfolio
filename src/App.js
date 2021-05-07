import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
