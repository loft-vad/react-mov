import React, { useEffect, useState } from "react";
import styles from "./MovieListPage.module.scss";

import SearchForm from "../../components/SearchForm/SearchForm";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import MovieTile from "../../components/MovieTile/MovieTile";
import MovieDetails, { MovieFull } from "../../components/MovieDetails/MovieDetails";
import SortControl, { sortByValue } from "../../components/SortControl/SortControl";
import AddMovie from "../../components/common/AddMovieButton/AddMovieButton";

import { ReactComponent as LogoSmall } from "../../assets/logo-small.svg";

export const sortBy: sortByValue[] = [
  { id: 1, name: "Release Date" },
  { id: 2, name: "Title" },
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

const moviesApiUrl = "http://localhost:4000/movies?";

const MovieListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(sortBy[0].name);
  const [activeGenre, setActiveGenre] = useState<string>("All");
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
    "Science Fiction",
  ];

  const onSearch = (searchString: string) => {
    console.log("searchString ", searchString);
    setSearchQuery(searchString);
  };

  const handleGenreSelection = (name: string) => {
    console.log(name, " clicked");
    setActiveGenre(name);
  };

  const handleMovieTileClick = (movie: MovieFull) => {
    console.log("Movie tile clicked");
    setSelectedMovie(movie);
  };

  const handleSortByClick = (criterion: string) => {
    console.log("Sort By item cliecked: ", criterion);
    setSortCriterion(criterion);
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

    let apiUrl = `${moviesApiUrl}`;
    if (activeGenre !== "All") {
      apiUrl = apiUrl + `searchBy=genres&search=${activeGenre}`;
    }
    if (searchQuery !== "") {
      apiUrl = apiUrl + `searchBy=title&search=${searchQuery}`;
    }
    if (sortCriterion !== sortBy[0].name) {
      apiUrl = apiUrl + `sortBy=${sortCriterion.toLowerCase()}&sortOrder=asc`;
    }
    console.log("apiUrl: ", apiUrl);

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

        {loading ? <div>Loading...</div> : <div>Loaded</div>}
      </div>
    </>
  );
};

export default MovieListPage;
