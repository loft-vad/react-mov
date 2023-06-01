import React from "react";

import AddMovieForm from "./AddMovieForm";

import { render } from "@testing-library/react";
describe("AddMovieForm component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<AddMovieForm />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
