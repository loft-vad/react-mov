import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import MovieListPage from "./MovieListPage";
import { BrowserRouter as Router } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

describe("MovieListPage", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("displays movie tiles correctly", async () => {
    const movies = [
      {
        id: 1,
        genres: ["Action"],
        imageUrl: "/path/to/image1.jpg",
        movieName: "Movie 1",
        releaseYear: 2021,
        rating: 7.5,
        duration: 120,
        description: "Movie 1 description",
      },
      {
        id: 2,
        genres: ["Comedy"],
        imageUrl: "/path/to/image2.jpg",
        movieName: "Movie 2",
        releaseYear: 2022,
        rating: 8.0,
        duration: 110,
        description: "Movie 2 description",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({ data: movies }));

    render(
      <Router>
        <MovieListPage />
      </Router>,
    );

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Movie 2")).toBeInTheDocument();
    });

    expect(screen.getByText("Movie 1 description")).toBeInTheDocument();
    expect(screen.getByText("Movie 2 description")).toBeInTheDocument();
  });

  it("displays loading message while fetching movies", async () => {
    fetchMock.mockResponseOnce(() => new Promise(() => {}));

    render(
      <Router>
        <MovieListPage />
      </Router>,
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays movie details when a movie tile is clicked", async () => {
    const movies = [
      {
        id: 1,
        genres: ["Action"],
        imageUrl: "/path/to/image1.jpg",
        movieName: "Movie 1",
        releaseYear: 2021,
        rating: 7.5,
        duration: 120,
        description: "Movie 1 description",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({ data: movies }));

    render(
      <Router>
        <MovieListPage />
      </Router>,
    );

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });

    act(() => {
      fireEvent.click(screen.getByText("Movie 1"));
    });

    await waitFor(() => {
      expect(screen.getByText("Movie 1 description")).toBeInTheDocument();
    });
  });

  // it("performs search correctly", async () => {
  //   const movies = [
  //     {
  //       id: 1,
  //       genres: ["Action"],
  //       imageUrl: "/path/to/image1.jpg",
  //       movieName: "Movie 1",
  //       releaseYear: 2021,
  //       rating: 7.5,
  //       duration: 120,
  //       description: "Movie 1 description",
  //     },
  //   ];

  //   fetchMock.mockResponseOnce(JSON.stringify({ data: movies }));

  //   render(
  //     <Router>
  //       <MovieListPage />
  //     </Router>,
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Movie 1")).toBeInTheDocument();
  //   });

  //   fireEvent.change(screen.getByPlaceholderText("Search"), { target: { value: "Movie 2" } });
  //   fireEvent.click(screen.getByText("Search"));

  //   expect(fetchMock).toHaveBeenCalledTimes(2);
  //   expect(fetchMock).toHaveBeenCalledWith(
  //     "http://localhost:4000/movies/?searchBy=title&search=Movie%202",
  //   );
  // });
});
