import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AddMovieButton.module.css";
import Modal from "../Dialog/Dialog";
// import MovieForm from "../../MovieForm/MovieForm";
import AddMovieForm from "../../AddMovieForm/AddMovieForm";

const AddMovie: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={styles.addMovieButton} onClick={() => setShowModal(true)}>
        + Add Movie
      </button>
      {showModal &&
        createPortal(
          <Modal title="Add Movie" onClose={() => setShowModal(false)}>
            {/* <MovieForm /> */}
            <AddMovieForm />
          </Modal>,
          document.body,
        )}
    </>
  );
};

export default AddMovie;
