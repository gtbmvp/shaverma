import { useState } from "react";
import styles from "./categories.module.scss";

const categories = ["Все", "Курица", "Говядина", "Баранина", "Фалафель"];

const Filter: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={styles.categories}>
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
  );
};

export default Filter;
