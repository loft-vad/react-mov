import React from "react";
import styles from "./App.module.scss";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
