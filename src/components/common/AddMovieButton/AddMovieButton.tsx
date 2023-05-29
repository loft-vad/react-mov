import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AddMovieButton.module.scss";
import Modal from "../Dialog/Dialog";
import MovieForm from "../../MovieForm/MovieForm";

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
            <MovieForm />
          </Modal>,
          document.body,
        )}
    </>
  );
};

export default AddMovie;
