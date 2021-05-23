import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/Contact";
import { HashRouter, Route } from "react-router-dom";
import oceanBackground from "./imgs/ocean-background.jpg";


function App() {
  return (
    <div>
      <HashRouter >
      <div className="background" style={{ backgroundImage: `url(${oceanBackground})` }}> 
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
