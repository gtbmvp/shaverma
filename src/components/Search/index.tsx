import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearch } from "../../store/slices/filterSlice";

import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import styles from "./search.module.scss";

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const search = useAppSelector((state) => state.filter.search);
  const dispatch = useAppDispatch();

  const handleBlur = () => {
    if (search === "") {
      setIsOpen(false);
    }
  };

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={isOpen ? `${styles.box} ${styles["box--active"]}` : styles.box}
    >
      <SearchIcon className={styles.icon} onClick={handleIconClick} />

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
