import React from "react";

import MovieTile, { MovieFull } from "./MovieDetails";
import { render } from "@testing-library/react";

const movie: MovieFull = {
  id: 1,
  title: "Pulp Fiction",
  poster_path: "",
  releaseYear: 2004,
  rating: 4,
  duration: 223,
  overview: "description",
  genres: ["Action & Adventure", "Comedy"],
};

describe("MovieTile component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieTile movieData={movie} />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
