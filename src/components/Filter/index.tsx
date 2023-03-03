import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeFilter } from "../../store/slices/filterSlice";

import { CategoriesType } from "../../types";

import styles from "./categories.module.scss";

const categories = ["все", "курица", "говядина", "баранина", "фалафель"];

const Filter: React.FC = () => {
  const filter = useAppSelector((state) => state.filter.filterBy);
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.categories}>
      {categories.map((cat) => {
        return (
          <li
            key={cat}
            className={cat === filter ? styles.active : ""}
            onClick={() => dispatch(changeFilter(cat as CategoriesType))}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
