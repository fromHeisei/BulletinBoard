import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BulletListContainer } from "./BulletListContainer";
import { bulletForm } from "./bulletForm";

function App() {
  return (
    <div class="App">
      <header class="App-header">掲示板</header>
      <div class="bullet">
        <h1>新着スレッド</h1>
        <bulletForm />
        <BulletListContainer />
      </div>
    </div>
  );
}

export default App;
