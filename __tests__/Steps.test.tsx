/**
 * @jest-environment jsdom
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createContainerWithStore } from "../testHelpers/domManipulators";
import Steps from "../src/components/Steps";

describe("Appointment", () => {
  let renderWithStore, container;

  beforeEach(() => {
    ({ renderWithStore, container } = createContainerWithStore());
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
