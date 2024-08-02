// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Assuming your styles are in index.css

function Home() {
  return (
    <div className="home-container">
      <Link to="/main" className="elden-ring-button">
        EnteR
      </Link>
    </div>
  );
}

export default Home;
