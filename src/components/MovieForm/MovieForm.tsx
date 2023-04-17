import styles from "./MovieForm.module.scss";
import Button from "../common/Button/Button";

const MovieForm: React.FC = () => {
  return (
    <form>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" placeholder="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="date">Release Date</label>
          <input id="date" name="date" type="date" placeholder="Select Date" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="url">Movie Url</label>
          <input id="url" name="url" type="text" placeholder="" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="rating">Rating</label>
          <input id="rating" name="rating" type="number" placeholder="" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="url">Genre</label>
          <select>
            <option>Select Genre</option>
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="rating">Runtime</label>
          <input id="rating" name="rating" type="number" placeholder="" value="" />
        </div>
        <div className={styles.inputWrapper + " " + styles.fullWidth}>
          <label htmlFor="overview">Overview</label>
          <textarea
            id="overview"
            name="overview"
            rows={5}
            placeholder="Movie description"
            value=""
          />
        </div>
      </div>
      <div className={styles.formActions}>
        <Button text="Reset" type="reset" />
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default MovieForm;
