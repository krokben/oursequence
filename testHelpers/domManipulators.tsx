import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactTestUtils from "react-dom/test-utils";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { storeSpy } from "expect-redux";
import configureStore from "../src/store";

const createContainer = () => {
  const container = document.createElement("div");

  return {
    render: (component) => act(() => ReactDOM.render(component, container)),
    container,
  };
};

export const createContainerWithStore = () => {
  const store = configureStore([storeSpy]);

  const container = createContainer();
  return {
    ...container,
    store,
    renderWithStore: (component) => {
      act(() => {
        ReactDOM.render(
          <Provider store={store}>{component}</Provider>,
          container.container
        );
      });
    },
  };
};
