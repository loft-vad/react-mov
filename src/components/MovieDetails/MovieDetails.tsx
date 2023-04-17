import React from "react";
import styles from "./MovieDetails.module.scss";
import { Movie } from "../MovieTile/MovieTile";

export interface MovieFull extends Movie {
  rating: number;
  duration: number;
  description: string;
}

interface MovieDetailsProps {
  movieData: MovieFull;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movieData: { imageUrl, movieName, releaseYear, genres, rating, duration, description },
}) => {
  return (
    <div className={styles.movieDetailsWrapper}>
      <div className={styles.movieImage}>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div className={styles.movieDetails}>
        <div className={styles.movieTitle}>
          <h1>{movieName}</h1>
          <div className={styles.movieRating}>{rating}</div>
        </div>
        <div className={styles.movieGenres}>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </div>
        <div className={styles.movieMeta}>
          <div className={styles.movieYear}>{releaseYear}</div>
          <div className={styles.movieDuration}>{duration}</div>
        </div>
        <div className={styles.movieDescription}>{description}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
