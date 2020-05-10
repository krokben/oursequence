/**
 * @jest-environment jsdom
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactTestUtils from "react-dom/test-utils";
import { createContainerWithStore } from "../testHelpers/domManipulators";
import Steps from "../src/components/Steps";

describe("Steps", () => {
  let renderWithStore, store, container, dispatchSpy;

  beforeEach(() => {
    ({ renderWithStore, store, container } = createContainerWithStore());
    dispatchSpy = jest.fn();
  });

  it("renders multiple steps in an ul element", () => {
    renderWithStore(<Steps />);
    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ul").children).toHaveLength(2);
  });

  it("renders each step in an li", () => {
    renderWithStore(<Steps />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  it("has a button element in each li", () => {
    renderWithStore(<Steps />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });
});
