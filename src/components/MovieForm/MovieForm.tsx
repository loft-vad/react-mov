import styles from "./MovieForm.module.scss";
import Button from "../common/Button/Button";
import { MovieFull } from "../MovieDetails/MovieDetails";
import { useState } from "react";

interface MovieFormProps {
  movieInfo?: MovieFull;
}

const MovieForm: React.FC<MovieFormProps> = ({
  movieInfo = {
    movieName: "",
    rating: 0,
    duration: 0,
    description: "",
    id: 0,
    imageUrl: "",
    releaseYear: 0,
    genres: ["All"],
  },
}): React.ReactElement => {
  const [formState, setFormState] = useState<MovieFull>(movieInfo);

  const formSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    console.log(formState);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormState((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={formSubmit} role="form">
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">Title</label>
          <input
            id="movieName"
            name="movieName"
            type="text"
            placeholder=""
            value={formState.movieName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="releaseYear">Release Date</label>
          <input
            id="releaseYear"
            name="releaseYear"
            type="date"
            placeholder="Select Date"
            min="1997"
            max="2222"
            step="1"
            value={formState.releaseYear}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="url">Movie Url</label>
          <input
            id="url"
            name="url"
            type="text"
            placeholder=""
            value={formState.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            name="rating"
            type="number"
            placeholder=""
            value={formState.rating}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre" value={formState.genres[0]} onChange={handleChange}>
            {formState.genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="duration">Runtime</label>
          <input
            id="duration"
            name="duration"
            type="number"
            placeholder=""
            value={formState.duration}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper + " " + styles.fullWidth}>
          <label htmlFor="description">Overview</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Movie description"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.formActions}>
        <Button text="Reset" type="reset" />
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default MovieForm;
