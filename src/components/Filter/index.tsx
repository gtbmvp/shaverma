import styles from "./categories.module.scss";

import { CategoriesType } from "../../types";

const categories = ["все", "курица", "говядина", "баранина", "фалафель"];

interface IFilter {
  value: CategoriesType;
  handleFilterChange: (cat: CategoriesType) => void;
}

const Filter: React.FC<IFilter> = ({ value, handleFilterChange }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((cat) => {
        return (
          <li
            key={cat}
            className={cat === value ? styles.active : ""}
            onClick={() => handleFilterChange(cat as CategoriesType)}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
