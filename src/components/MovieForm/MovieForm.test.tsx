import React from "react";

import { render } from "@testing-library/react";
import MovieForm from "./MovieForm";

describe("MovieForm component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieForm />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
