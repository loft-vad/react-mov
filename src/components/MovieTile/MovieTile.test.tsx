import React from "react";

import MovieTile, { Movie } from "./MovieTile";
import { fireEvent, render } from "@testing-library/react";

const movie: Movie = {
  id: 1,
  movieName: "Pulp Fiction",
  imageUrl: "",
  releaseYear: 2004,
  genres: [
    { id: 1, name: "Action & Adventure" },
    { id: 2, name: "Comedy" },
  ],
};

describe("MovieTile component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieTile movieData={movie} onClickHandler={() => {}} />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("after clicking on movie tile onClickHandler is called", () => {
    const onClickHandler = jest.fn();
    const wrapper = render(<MovieTile movieData={movie} onClickHandler={onClickHandler} />);
    const movieTileWrapper = wrapper.container.querySelector("div");

    expect(movieTileWrapper).toBeInTheDocument();
    fireEvent.click(movieTileWrapper!);
    expect(onClickHandler).toHaveBeenCalled();
  });
});
