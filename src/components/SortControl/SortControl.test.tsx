import React from "react";

import SortControl from "./SortControl";
import { fireEvent, render } from "@testing-library/react";
import { sortBy } from "../../App";

describe("GenreSelect component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it("renders all genres passed in props", () => {
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );
    const renderedItems = wrapper.getAllByTestId("genre").map((item) => item.textContent);
    const inputItems = sortBy.map((item) => item.name);
    expect(renderedItems).toEqual(inputItems);
  });
  it("highlights a selected genre passed in props", () => {
    const activeItem = sortBy[0].name;
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );
    const activeItemElement = wrapper.container.querySelector(".active");
    expect(activeItemElement?.textContent).toEqual(activeItem);
  });
  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const callback = jest.fn();
    const wrapper = render(
      <SortControl values={sortBy} selected={sortBy[0].name} onSelect={() => {}} />,
    );
    const button = wrapper.container.querySelector("button");
    fireEvent.click(button!);
    expect(callback).toHaveBeenCalledWith(sortBy[0].name);
  });
});
