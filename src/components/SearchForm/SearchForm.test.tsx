import React from "react";

import SearchForm from "./SearchForm";
import { fireEvent, render } from "@testing-library/react";

const initialSearchString = "search string";

describe("SearchForm component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<SearchForm onSearch={() => {}} />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it("renders an input with the value equal to initial value passed in props", () => {
    const wrapper = render(
      <SearchForm initialSearchString={initialSearchString} onSearch={() => {}} />,
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    const onSearch = jest.fn();
    const wrapper = render(
      <SearchForm initialSearchString={initialSearchString} onSearch={onSearch} />,
    );
    const searchButton = wrapper.container.querySelector("button");

    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton!);
    expect(onSearch).toHaveBeenCalledWith(initialSearchString);
  });
  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    const onSearch = jest.fn();
    const wrapper = render(
      <SearchForm initialSearchString={initialSearchString} onSearch={onSearch} />,
    );
    const searchInput = wrapper.container.querySelector("input");

    expect(searchInput).toBeInTheDocument();
    fireEvent.keyDown(searchInput!, { key: "Enter" });
    expect(onSearch).toHaveBeenCalledWith(initialSearchString);
  });
});
