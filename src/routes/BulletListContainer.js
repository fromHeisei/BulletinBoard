import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <h2 key={bullet} value={bullet}>
          <Link
            to={"/threadpost"}
            state={bullet.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {bullet.title}
          </Link>
        </h2>
      </div>
    );
  });
  return <div class="listItems">{listItems}</div>;
}
