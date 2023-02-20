import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bulletList, setBulletList] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBulletList(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">掲示板</header>
    </div>
  );
}

export default App;
