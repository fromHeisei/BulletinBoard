import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function BulletForm() {
  const [formtext, setFormtext] = useState("");

  const formTextPost = () => {
    axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        title: formtext,
      }
    );
  };
  return (
    <div class="Form">
      <input
        value={formtext}
        onChange={(event) => setFormtext(event.target.value)}
      />
      <button onClick={formTextPost}>新規スレッドを作成</button>
      <div>
        <Link to={"/"}>ホームに戻る</Link>
      </div>
    </div>
  );
}
