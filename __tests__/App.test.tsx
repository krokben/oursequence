/**
 * @jest-environment jsdom
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactTestUtils from "react-dom/test-utils";
import { createContainerWithStore } from "../testHelpers/domManipulators";
import App from "../src/App";

describe("Steps", () => {
  let renderWithStore, store, container;

  beforeEach(() => {
    ({ renderWithStore, store, container } = createContainerWithStore());
  });

  it("shows message that no step is chosen at start", () => {
    renderWithStore(<App />);
    expect(container.textContent).toMatch("Chosen step: none chosen");
  });

  it("sets the chosen step to step id when step button is clicked", async () => {
    renderWithStore(<App />);
    const button = container.querySelector("li > button");
    await ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Chosen step: 1");
  });
});
