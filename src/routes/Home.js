import "../App.css";
import { Link } from "react-router-dom";
import { BulletListContainer } from "./BulletListContainer";
import { BulletForm } from "./BulletForm";
import { useState } from "react";

export function Home() {
  const [text, setText] = useState("");

  return (
    <div class="App">
      <header class="App-header">掲示板</header>
      <div>
        <Link to={"/bulletform/"}>新規スレッド</Link>
      </div>
      <div class="bullet">
        <h1>新着スレッド</h1>
        <BulletListContainer />
      </div>
    </div>
  );
}
