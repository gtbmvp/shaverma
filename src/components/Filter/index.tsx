import { useState } from "react";
import styles from "./categories.module.scss";

const categories = ["Все", "Курица", "Говядина", "Баранина", "Фалафель"];

const Filter: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((cat, index) => {
          return (
            <li
              key={cat}
              className={index === activeIndex ? styles.active : ""}
              onClick={() => setActiveIndex(index)}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
