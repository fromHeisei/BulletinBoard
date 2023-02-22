import { useEffect, useState } from "react";

export function BulletListContainer() {
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

  const listItems = bulletList.map((bullet) => {
    return (
      <h2 key={bullet} value={bullet}>
        {bullet.title}
      </h2>
    );
  });
  return <div class="listItems">{listItems}</div>;
}
