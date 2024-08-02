import React from "react";
import BossSearch from "./BossSearch";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h3 className="header-title">Elden rinG</h3>
        <h3 className="header-subtitle">baby back bitches</h3>
      </header>
      <main className="main-content">
        <BossSearch />
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
