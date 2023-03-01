import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../store/slices/filterSlice";

import styles from "./categories.module.scss";

import { CategoriesType } from "../../types";

const categories = ["все", "курица", "говядина", "баранина", "фалафель"];

const Filter: React.FC = () => {
  const filter = useSelector((state: RootState) => state.filter.filterBy);
  const dispatch = useDispatch();

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
