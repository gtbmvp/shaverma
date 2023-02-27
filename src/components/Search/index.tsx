import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import styles from "./search.module.scss";

interface ISearch {
  value: string;
  handleSearchChange: (search: string) => void;
}

const Search: React.FC<ISearch> = ({ value, handleSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = () => {
    if (value === "") {
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
          value={value}
          onChange={(e) => handleSearchChange(e.target.value.toLowerCase())}
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
