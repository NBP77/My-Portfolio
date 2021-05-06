import React from "react";
import Home from "./components/Home";
import Header from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
       
          <Route exact path="/" component={Home} />
          
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;
