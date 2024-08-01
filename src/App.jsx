import React from "react";
import BossSearch from "./BossSearch";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Baby Back Bitches</h1>
      </header>
      <main className="main-content">
        <BossSearch />
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
