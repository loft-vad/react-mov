import React from "react";
import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect, { genre } from "./components/GenreSelect/GenreSelect";

const App: React.FC = () => {
  const genres: genre[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Documentary" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Crime" },
  ];

  const onSearch = (searchString: string) => {
    console.log("searchString ", searchString);
  };

  const handleGenreSelection = (name: string) => {
    console.log(name, " clicked");
  };

  return (
    <div className={styles.contentWrapper}>
      <header>
        <div className={styles.wrapper}>
          <SearchForm onSearch={onSearch} />
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.searchFilter}>
          <GenreSelect genres={genres} onSelect={handleGenreSelection} />
        </div>
        <div className={styles.counter}>
          <Counter initialValue={0} />
        </div>
      </div>
    </div>
  );
};

export default App;
