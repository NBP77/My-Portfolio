import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter >
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects" component={ProjectsPage} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
