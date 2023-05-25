import React from "react";
import styles from "./App.module.scss";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

import moviesDb from "./data/movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:movieId",
    element: <MovieDetails movieData={moviesDb[0]} />,
    errorElement: <ErrorPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
