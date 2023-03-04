import "../App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ThreadPost() {
  const { state } = useLocation();
  const [threadList, setThreadList] = useState([]);
  const [postThread, setPostThread] = useState("");
  const inputRef = useRef();

  const apiFetch = () => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${state}/posts?offset=0`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.posts != null) {
          setThreadList(data.posts);
        }
      });
  };

  useEffect(() => {
    apiFetch();
  }, []);

  const clickButton = () => {
    axios.post(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${state}/posts`,
      {
        post: postThread,
      }
    );
    apiFetch();
  };
  return (
    <div>
      <header class="thread-header">投稿一覧</header>
      <div class="threadposts">
        <input
          ref={inputRef}
          value={postThread}
          onChange={(event) => setPostThread(event.target.value)}
          placeholder="投稿内容"
        />
        <button onClick={clickButton}>投稿する</button>
        <div class="threadItems">
          {threadList.map((thread) => (
            <div>
              <h2 key={thread.id} value={thread.post}>
                {thread.post}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
