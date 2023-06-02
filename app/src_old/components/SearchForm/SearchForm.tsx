import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import Button from "../common/Button/Button";

interface SearchProps {
  initialSearchString?: string;
  onSearch: (searchTerm: string) => void;
}

const SearchForm: React.FC<SearchProps> = ({ initialSearchString = "", onSearch }) => {
  const [searchString, setSearchString] = useState(initialSearchString);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchString);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="What do you want to watch?"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchString}
      />
      <Button text="Search" callBack={() => onSearch(searchString)} />
    </div>
  );
};

export default SearchForm;
