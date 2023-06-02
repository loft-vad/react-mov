import React, { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import { Movie } from "../MovieTile/MovieTile";
import { useParams } from "react-router-dom";

export interface MovieFull extends Movie {
  rating: number;
  duration: number;
  overview: string;
}

interface MovieDetailsProps {
  movieData: MovieFull;
}

const moviesApiUrl = "http://localhost:4000/movies";

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieFull>({
    id: 1,
    title: "",
    poster_path: "",
    releaseYear: 2004, // release_date
    rating: 4, // vote_average
    duration: 223, // runtime
    overview: "description",
    genres: ["Action & Adventure", "Comedy"],
  });

  useEffect(() => {
    setLoading(true);

    let apiUrl = `${moviesApiUrl}/${movieId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setSelectedMovie({
          ...data,
          releaseYear: +data.release_date.slice(0, 4),
          duration: data.runtime,
          rating: data.vote_average,
        });
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log("selectedMovie ", selectedMovie);
    return () => {};
  }, [movieId]);

  return (
    <div className={styles.movieDetailsWrapper}>
      {loading}
      {selectedMovie ? (
        <>
          <div className={styles.movieImage}>
            <img src={selectedMovie.poster_path} alt={selectedMovie.title} />
          </div>
          <div className={styles.movieDetails}>
            <div className={styles.movieTitle}>
              <h1>{selectedMovie.title}</h1>
              <div className={styles.movieRating}>{selectedMovie.rating}</div>
            </div>
            <div className={styles.movieGenres}>
              {selectedMovie.genres.map((genre, index) => (
                <span key={genre + index}>{genre} </span>
              ))}
            </div>
            <div className={styles.movieMeta}>
              <div className={styles.movieYear}>{selectedMovie.releaseYear}</div>
              <div className={styles.movieDuration}>{selectedMovie.duration}</div>
            </div>
            <div className={styles.movieDescription}>{selectedMovie.overview}</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
