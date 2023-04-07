import React from "react";

import MovieTile, { MovieFull } from "./MovieDetails";
import { render } from "@testing-library/react";

const movie: MovieFull = {
  id: 1,
  movieName: "Pulp Fiction",
  imageUrl: "",
  releaseYear: 2004,
  rating: 4,
  duration: 223,
  description: "description",
  genres: [
    { id: 1, name: "Action & Adventure" },
    { id: 2, name: "Comedy" },
  ],
};

describe("MovieTile component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieTile movieData={movie} />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
