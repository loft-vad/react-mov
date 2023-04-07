import React from "react";
import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect, { genre } from "./components/GenreSelect/GenreSelect";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails, { MovieFull } from "./components/MovieDetails/MovieDetails";
import moviesDb from "./data/movies";
import SortControl, { sortByValue } from "./components/SortControl/SortControl";

export const sortBy: sortByValue[] = [
  { id: 1, name: "Release Date" },
  { id: 2, name: "Title" },
];

const App: React.FC = () => {
  const genres: genre[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Documentary" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Crime" },
  ];

  const movies: MovieFull[] = moviesDb;

  const onSearch = (searchString: string) => {
    console.log("searchString ", searchString);
  };

  const handleGenreSelection = (name: string) => {
    console.log(name, " clicked");
  };

  const handleMovieTileClick = () => {
    console.log("Movie tile clicked");
  };

  const handleSortByClick = (name: string) => {
    console.log("Sort By item cliecked: ", name);
  };

  return (
    <div className={styles.contentWrapper}>
      <header>
        <div className={styles.wrapper}>
          <SearchForm onSearch={onSearch} />
        </div>
      </header>
      <div>
        <MovieDetails movieData={movies[0]} />
      </div>
      <div className={styles.content}>
        <div className={styles.searchFilter}>
          <GenreSelect genres={genres} onSelect={handleGenreSelection} />
          <SortControl selected={sortBy[0].name} values={sortBy} onSelect={handleSortByClick} />
        </div>
        <div className={styles.moviesList}>
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
