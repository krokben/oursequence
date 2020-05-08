/**
 * @jest-environment jsdom
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Steps } from "../src/components/Steps";

describe("Appointment", () => {
  let container;
  const steps = [
    { id: 1, drum: "kick" },
    { id: 2, drum: "snare" },
  ];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders multiple steps in an ul element", () => {
    render(<Steps steps={steps} />);
    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ul").children).toHaveLength(2);
  });

  it("renders each step in an li", () => {
    render(<Steps steps={steps} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  it("has a button element in each li", () => {
    render(<Steps steps={steps} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });
});
