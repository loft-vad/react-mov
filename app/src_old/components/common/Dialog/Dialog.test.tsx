import React from "react";

import { render } from "@testing-library/react";
import Modal from "./Dialog";

describe("Modal Dialog component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <Modal onClose={() => {}}>
        <>
          <button>Test Child for Focus Trap</button>
          <button>Test Child for Focus Trap</button>
        </>
      </Modal>,
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
