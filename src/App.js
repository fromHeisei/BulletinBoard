import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BulletListContainer } from "./BulletListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">掲示板</header>
      <BulletListContainer />
    </div>
  );
}

export default App;
