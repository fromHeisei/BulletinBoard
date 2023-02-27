import "../App.css";
import { Link } from "react-router-dom";
import { BulletListContainer } from "./BulletListContainer";

export function Home() {
  return (
    <div class="App">
      <header class="App-header">掲示板</header>
      <div>
        <Link to={"/bulletForm/"}>新規スレッド</Link>
      </div>
      <div class="bullet">
        <h1>新着スレッド</h1>
        <BulletListContainer />
      </div>
    </div>
  );
}
