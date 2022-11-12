import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      placeholder="Search recipes.."
      className={styles.input}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
};

export default SearchBar;
