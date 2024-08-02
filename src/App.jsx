import React from "react";
import BossSearch from "./BossSearch";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <img className="header-title" src="/elden-ring-logo.png"></img>
      </header>
      <main className="main-content">
        <BossSearch />
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
