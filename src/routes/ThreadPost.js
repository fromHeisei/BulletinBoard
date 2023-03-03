import "../App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ThreadPost() {
  const { state } = useLocation();
  const [threadList, setThreadList] = useState([]);

  useEffect(() => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${state}/posts?offset=0`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setThreadList(data.posts);
      });
  }, [state]);
  console.log(threadList);
  const threadItems = threadList.map((thread) => (
    <div>
      <h2 key={thread.id} value={thread.post}>
        {thread.post}
      </h2>
    </div>
  ));
  return (
    <div>
      <header class="thread-header">投稿一覧</header>
      <div class="threadItems">{threadItems}</div>
    </div>
  );
}
