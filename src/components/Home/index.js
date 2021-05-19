import React from "react";
import "./style.css";
import background from '../../imgs/ocean-background.jpg';

function Home() {
  return (
    <div>
      <div className="container">
        <div styles={{backgroundImage: `url(${background})`}}></div>
      </div>
    </div>
  );
}

export default Home;
