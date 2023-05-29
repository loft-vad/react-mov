import React from "react";

import ErrorPage from "./ErrorPage";
import { render } from "@testing-library/react";

describe("ErrorPage component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<ErrorPage />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
