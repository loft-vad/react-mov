import React from "react";

import { render } from "@testing-library/react";
import MovieListPage from "./MovieListPage";

describe("MovieTile component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieListPage />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
