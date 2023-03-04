import "../App.css";
import { Link } from "react-router-dom";
import { BulletListContainer } from "./BulletListContainer";

export function Home() {
  return (
    <div class="App">
      <header class="App-header">
        <div>掲示板</div>
        <Link to={"/bulletform/"}>新規スレッド作成</Link>
      </header>
      <div class="bullet">
        <h1>新着スレッド</h1>
        <BulletListContainer />
      </div>
    </div>
  );
}
