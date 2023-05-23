import React, { useEffect, useState } from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";

import styles from "./MovieListPage.module.scss";

import SearchForm from "../../components/SearchForm/SearchForm";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import MovieTile from "../../components/MovieTile/MovieTile";
import MovieDetails, { MovieFull } from "../../components/MovieDetails/MovieDetails";
import SortControl, { sortByValue } from "../../components/SortControl/SortControl";
import AddMovie from "../../components/common/AddMovieButton/AddMovieButton";

import { ReactComponent as LogoSmall } from "../../assets/logo-small.svg";

export const sortBy: sortByValue[] = [
  { id: 1, name: "Release Date", value: "release_date" },
  { id: 2, name: "Title", value: "title" },
];

interface MovieApiData {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  id: number;
}

const moviesApiUrl = "http://localhost:4000/movies";

const MovieListPage: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const defaultSearchQuery = searchParams.get("search") || "";
  const defaultSortCriterion = searchParams.get("sortBy") || "";
  const defaultActiveGenre = searchParams.get("genre") || "all";

  const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
  const [sortCriterion, setSortCriterion] = useState(defaultSortCriterion);
  const [activeGenre, setActiveGenre] = useState<string>(defaultActiveGenre);

  const [movieList, setMovieList] = useState<MovieFull[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieFull | null>(null);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(new AbortController());

  const genres: string[] = [
    "All",
    "Documentary",
    "Comedy",
    "Horror",
    "Crime",
    "Fantasy",
    "Adventure",
  ];

  const onSearch = (searchBy: string) => {
    setSearchQuery(searchBy);
  };

  const handleGenreSelection = (name: string) => {
    setActiveGenre(name);
  };

  const handleSortByClick = (criterion: string) => {
    setSortCriterion(criterion);
  };

  const handleMovieTileClick = (movie: MovieFull) => {
    setSelectedMovie(movie);
  };

  const dataTransform = (movieApi: MovieApiData[]): MovieFull[] => {
    return movieApi.map(
      ({ id, genres, poster_path, title, release_date, vote_average, overview, runtime }) => {
        return {
          id,
          genres,
          imageUrl: poster_path,
          movieName: title,
          releaseYear: +release_date.slice(0, 4),
          rating: vote_average,
          duration: runtime,
          description: overview,
        };
      },
    );
  };

  useEffect(() => {
    controller.abort();
    const newController = new AbortController();
    setController(newController);
    setLoading(true);

    let params = {};

    let apiUrl = `${moviesApiUrl}/?`;
    if (activeGenre !== "all") {
      params = {
        ...params,
        searchBy: "genres",
        search: activeGenre,
      };
    }
    if (searchQuery !== "") {
      params = {
        ...params,
        searchBy: "title",
        search: searchQuery,
      };
    }
    if (sortCriterion !== "") {
      params = {
        ...params,
        sortOrder: "asc",
        sortBy: sortCriterion.toLowerCase(),
      };
    }

    setSearchParams(params);
    apiUrl = moviesApiUrl + "/?" + createSearchParams(params);

    fetch(apiUrl, { signal: newController.signal })
      .then((response) => response.json())
      .then((data) => {
        setMovieList(dataTransform(data.data));
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      newController.abort();
    };
  }, [searchQuery, sortCriterion, activeGenre]);

  return (
    <>
      {selectedMovie ? (
        <div>
          <MovieDetails movieData={selectedMovie} />
        </div>
      ) : (
        <header>
          <div className={styles.headerWrapper}>
            <div className={styles.headerBar}>
              <div className={styles.logoSmall}>
                <LogoSmall />
              </div>
              <AddMovie />
            </div>
            <div>
              <h1>Find Your Movie</h1>
              <SearchForm onSearch={onSearch} />
            </div>
          </div>
        </header>
      )}
      <div className={styles.content}>
        <div className={styles.searchFilter}>
          <GenreSelect genres={genres} onSelect={handleGenreSelection} />
          <SortControl selected={sortCriterion} values={sortBy} onSelect={handleSortByClick} />
        </div>
        <div className={styles.moviesList}>
          {movieList.map((movie) => (
            <MovieTile
              key={movie.id}
              movieData={movie}
              onClickHandler={() => handleMovieTileClick(movie)}
            />
          ))}
        </div>

        {loading ? <div>Loading...</div> : <div>&nbsp;</div>}
      </div>
    </>
  );
};

export default MovieListPage;
