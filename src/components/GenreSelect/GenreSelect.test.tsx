import React from "react";

import GenreSelect, { genre } from "./GenreSelect";
import { fireEvent, render } from "@testing-library/react";

const genres: genre[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Documentary" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Horror" },
  { id: 5, name: "Crime" },
];

describe("GenreSelect component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<GenreSelect genres={genres} onSelect={() => {}} />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it("renders all genres passed in props", () => {
    const wrapper = render(<GenreSelect genres={genres} onSelect={() => {}} />);
    const renderedItems = wrapper.getAllByTestId("genre").map((item) => item.textContent);
    const inputItems = genres.map((item) => item.name);
    expect(renderedItems).toEqual(inputItems);
  });
  it("highlights a selected genre passed in props", () => {
    const activeItem = genres[3].name;
    const wrapper = render(
      <GenreSelect genres={genres} onSelect={() => {}} activeItem={activeItem} />,
    );
    const activeItemElement = wrapper.container.querySelector(".active");
    expect(activeItemElement?.textContent).toEqual(activeItem);
  });
  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const callback = jest.fn();
    const wrapper = render(<GenreSelect genres={genres} onSelect={callback} />);
    const button = wrapper.container.querySelector("button");
    fireEvent.click(button!);
    expect(callback).toHaveBeenCalledWith(genres[0].name);
  });
});
