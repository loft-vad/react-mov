import React from "react";

import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";

describe("Counter component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Counter />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it("renders initial value provided in props", () => {
    const init = 14;
    const wrapper = render(<Counter initialValue={init} />);
    const element = wrapper.getByText(init);
    expect(element).toBeInTheDocument();
  });

  it('click event on "increment" button increments the displayed value', () => {
    const wrapper = render(<Counter />);

    const incrementButton = wrapper.getByText("+");
    fireEvent.click(incrementButton);
    const counterIncremented = wrapper.getByText("1");
    expect(counterIncremented).toBeInTheDocument();
  });

  it('click event on "decrement" button decrements the displayed value', () => {
    const wrapper = render(<Counter />);

    const incrementButton = wrapper.getByText("-");
    fireEvent.click(incrementButton);
    const counterIncremented = wrapper.getByText("-1");
    expect(counterIncremented).toBeInTheDocument();
  });
});
