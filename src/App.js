import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { BulletListContainer } from "./BulletListContainer";
import { AddForm } from "./AddForm";
import { bulletForm } from "./bulletForm";

function App() {
  return (
    <div class="App">
      <header class="App-header">掲示板</header>
      <BrowserRouter>
        <Link to="/bulletForm">新規スレッド作成</Link>
        <Switch>
          <Route path="/bulletForm">
            <bulletForm />
          </Route>
        </Switch>
      </BrowserRouter>
      <div class="bullet">
        <h1>新着スレッド</h1>
        <AddForm />
        <BulletListContainer />
      </div>
    </div>
  );
}

export default App;
