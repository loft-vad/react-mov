import React from "react";
import styles from "./AddMovieForm.module.css";
import Button from "../common/Button/Button";
import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

// interface IFormValues {
//   genre: string;
//   genre: string;
//   age: number;
// }

// type InputProps = {
//   label: Path<IFormInput>;
//   register: UseFormRegister<IFormInput>;
//   required: boolean;
// };

interface IFormInput {
  title: string;
  releaseYear: number;
  url: string;
  rating: number;
  runtime: number;
  genres: string;
  overview: string;
}

const genres: string[] = ["All", "Documentary", "Comedy", "Horror", "Crime"];

// const Input = ({ label, register }: InputProps) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label)} />
//   </>
// );

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string; items: string[] } & ReturnType<UseFormRegister<IFormInput>>
>(({ onChange, onBlur, name, label, items }, ref) => (
  <>
    <label>{label}</label>
    <select
      id={name}
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={items[0]}
    >
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
));

const moviesApiUrl = "http://localhost:4000/movies";

const AddMovieForm: React.FC = () => {
  const { handleSubmit, register } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    const dataTransform = {
      title: data.title,
      genres: data.genres.split(","),
      poster_path: data.url,
      runtime: +data.runtime,
      overview: data.overview,
      release_date: "2016-12-29",
    };
    // {
    //   "title": "La La Land",
    //   "tagline": "Here's to the fools who dream.",
    //   "vote_average": 7.9,
    //   "vote_count": 6782,
    //   "release_date": "2016-12-29",
    //   "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    //   "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    //   "budget": 30000000,
    //   "revenue": 445435700,
    //   "runtime": 128,
    //   "genres": [
    //     "Comedy",
    //     "Drama",
    //     "Romance"
    //   ]
    // }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataTransform),
    };
    fetch(moviesApiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error fetching movie:", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} role="form">
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">Title</label>
          <input {...register("title", { required: true })} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="releaseYear">Release Date</label>
          <input type="date" {...register("releaseYear", { required: false })} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="url">Movie Url</label>
          <input type="url" {...register("url", { required: false })} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="rating">Rating</label>
          <input type="number" {...register("rating", { required: false, min: 1 })} />
        </div>
        <div className={styles.inputWrapper}>
          <Select items={genres} label="Genre" {...register("genres")} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="runtime">runtime</label>
          <input type="number" {...register("runtime", { required: true, min: 1 })} />
        </div>
        <div className={styles.inputWrapper + " " + styles.fullWidth}>
          <textarea rows={5} {...register("overview", { required: true, minLength: 1 })} />
        </div>
      </div>
      <div className={styles.formActions}>
        <Button text="Reset" type="reset" />
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default AddMovieForm;
