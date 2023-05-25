import React from "react";
import styles from "./MovieTile.module.scss";
import { Link } from "react-router-dom";

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  releaseYear: number;
  genres: string[];
}

interface MovieTileProps {
  movieData: Movie;
  onClickHandler?: () => void;
}

const MovieTile: React.FC<MovieTileProps> = ({
  movieData: { poster_path, title, releaseYear, genres, id },
  onClickHandler,
}) => {
  return (
    <div className={styles.movieTileWrapper} onClick={onClickHandler}>
      <Link to={"" + id}>
        <div className={styles.movieImage}>
          <img src={poster_path} alt={title} />
        </div>
        <div className={styles.movieTitle}>
          {title}
          <div className={styles.moviewYear}>{releaseYear}</div>
        </div>
        <div className={styles.movieGenres}>
          {genres.map((genre, index) => (
            <span key={genre + index}>{genre} </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default MovieTile;
