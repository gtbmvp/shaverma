import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearch } from "../../store/slices/filterSlice";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import styles from "./search.module.scss";

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const search = useAppSelector((state) => state.filter.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search !== "") {
      setIsOpen(true);
    }
  }, [search]);

  const handleBlur = () => {
    if (search === "") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={isOpen ? `${styles.box} ${styles["box--active"]}` : styles.box}
    >
      <SearchIcon
        className={styles.icon}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <TextField
          inputRef={(input) => input?.focus()}
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          onBlur={handleBlur}
          variant="standard"
          sx={{
            "& .MuiInput-underline:after": {
              borderBottomColor: "orange",
            },
          }}
        />
      )}
    </div>
  );
};

export default Search;
