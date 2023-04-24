import React from "react";
import styles from "./App.module.scss";
import MovieListPage from "./pages/MovieListPage/MovieListPage";

const App: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <MovieListPage />
    </div>
  );
};

export default App;
