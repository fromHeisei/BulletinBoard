import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function BulletForm() {
  const [formtext, setFormtext] = useState("");
  const navigate = useNavigate();

  const formTextPost = () => {
    axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        title: formtext,
      }
    );
    navigate("/");
    alert(`新規スレッドを作成しました。スレッドタイトル：${formtext}`);
  };
  return (
    <div class="Form">
      <header class="Form-header">新規スレッドを作成</header>
      <div class="threadtitle">
        <input
          class="Bullet-Form"
          value={formtext}
          onChange={(event) => setFormtext(event.target.value)}
          placeholder="スレッドタイトル"
        />
        <button onClick={formTextPost}>新規スレッドを作成</button>
      </div>
    </div>
  );
}
