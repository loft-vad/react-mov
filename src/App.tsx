import React from "react";
import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect, { genre } from "./components/GenreSelect/GenreSelect";
import MovieTile, { Movie } from "./components/MovieTile/MovieTile";

const App: React.FC = () => {
  const genres: genre[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Documentary" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Crime" },
  ];

  const movies: Movie[] = [
    {
      id: 1,
      movieName: "Pulp Fiction",
      imageUrl: "",
      releaseYear: 2004,
      genres: [
        { id: 1, name: "Action & Adventure" },
        { id: 2, name: "Comedy" },
      ],
    },
    {
      id: 2,
      movieName: "Bohemian Rhapsody",
      imageUrl: "",
      releaseYear: 2003,
      genres: [{ id: 1, name: "All" }],
    },
    {
      id: 3,
      movieName: "All",
      imageUrl: "",
      releaseYear: 2002,
      genres: [
        { id: 1, name: "All" },
        { id: 2, name: "Documentary" },
        { id: 3, name: "Comedy" },
      ],
    },
  ];

  const onSearch = (searchString: string) => {
    console.log("searchString ", searchString);
  };

  const handleGenreSelection = (name: string) => {
    console.log(name, " clicked");
  };

  const handleMovieTileClick = () => {
    console.log("Movie tile clicked");
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
        <div>
          {movies.map((movie) => (
            <MovieTile movieData={movie} onClickHandler={handleMovieTileClick} />
          ))}
        </div>
        <div className={styles.counter}>
          <Counter initialValue={0} />
        </div>
      </div>
    </div>
  );
};

export default App;
