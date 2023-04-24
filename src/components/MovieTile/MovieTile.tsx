import React from "react";
import styles from "./MovieTile.module.scss";

export interface Movie {
  id: number;
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  genres: string[];
}

interface MovieTileProps {
  movieData: Movie;
  onClickHandler: () => void;
}

const MovieTile: React.FC<MovieTileProps> = ({
  movieData: { imageUrl, movieName, releaseYear, genres },
  onClickHandler,
}) => {
  return (
    <div className={styles.movieTileWrapper} onClick={onClickHandler}>
      <div className={styles.movieImage}>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div className={styles.movieTitle}>
        {movieName}
        <div className={styles.moviewYear}>{releaseYear}</div>
      </div>
      <div className={styles.movieGenres}>
        {genres.map((genre, index) => (
          <span key={genre + index}>{genre} </span>
        ))}
      </div>
    </div>
  );
};

export default MovieTile;
