import React from "react";

import SortControl from "./SortControl";
import { fireEvent, render } from "@testing-library/react";
import { sortBy } from "../../pages/MovieListPage/MovieListPage";

describe("GenreSelect component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it("renders all sorted values passed in the props", () => {
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );
    const renderedItems = wrapper.getAllByTestId("option").map((item) => item.textContent);
    const inputItems = sortBy.map((item) => item.name);
    expect(renderedItems).toEqual(inputItems);
  });
  it("has name passed in props selected by default", () => {
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );
    const renderedItems = wrapper.getAllByTestId("option") as HTMLOptionElement[];
    expect(renderedItems[0].selected).toBeTruthy();
  });
  it('after a click event on any sort option calls "onSelect" callback and passes correct name in arguments', () => {
    const callback = jest.fn();
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={callback} />,
    );
    const select = wrapper.getByTestId("select");
    const options = wrapper.getAllByTestId("option") as HTMLOptionElement[];
    fireEvent.change(select, { target: { value: sortBy[1].name } });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(callback).toHaveBeenCalledWith(sortBy[1].name);
  });
});
