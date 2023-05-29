import React from "react";

import MovieForm from "./MovieForm";

import { render, fireEvent, screen } from "@testing-library/react";
describe("MovieForm component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MovieForm />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  test("should update form state on input change", () => {
    render(<MovieForm />);
    const titleInput: HTMLInputElement = screen.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: "Test Movie" } });
    expect(titleInput.value).toBe("Test Movie");
  });

  test("should call formSubmit on form submission", () => {
    const formSubmitMock = jest.fn();
    render(<MovieForm />);
    const form = screen.getByRole("form");
    form.addEventListener("submit", formSubmitMock);
    fireEvent.submit(form);
    expect(formSubmitMock).toHaveBeenCalled();
  });

  test("should display Reset and Submit buttons", () => {
    render(<MovieForm />);
    const resetButton = screen.getByText("Reset");
    const submitButton = screen.getByText("Submit");
    expect(resetButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
