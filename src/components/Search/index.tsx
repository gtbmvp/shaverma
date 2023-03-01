import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/filterSlice";

import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import styles from "./search.module.scss";

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const search = useSelector((state: RootState) => state.filter.search);
  const dispatch = useDispatch();

  const handleBlur = () => {
    if (search === "") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <SearchIcon
          className={styles.icon}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
      {isOpen && (
        <TextField
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
    </>
  );
};

export default Search;
