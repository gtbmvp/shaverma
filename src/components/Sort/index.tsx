import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeSorting } from "../../store/slices/filterSlice";

import { useState, useEffect, useRef } from "react";

import styles from "./sort.module.scss";

import { SortType } from "../../types";

const sortings = {
  rating: "популярности",
  price: "цене",
  energy: "ккал",
};

const Sort: React.FC = () => {
  const [open, setOpen] = useState(false);

  const sorting = useAppSelector((state) => state.filter.sorting);
  const dispatch = useAppDispatch();

  const popup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler: EventListener = (event) => {
      if (!(event.target instanceof Element)) return;

      if (popup.current && !popup.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleSortSelectClick = (sort: SortType) => {
    dispatch(changeSorting(sort));
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform={!open ? "scale(1 -1)" : ""}
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen((prev) => !prev)}>
          {sortings[sorting]}
        </span>
      </div>
      {open && (
        <div ref={popup} className={styles.popup}>
          <ul>
            {Object.entries(sortings).map(([field, value]) => (
              <li
                key={field}
                className={field === sorting ? styles.active : ""}
                onClick={() => handleSortSelectClick(field as SortType)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
