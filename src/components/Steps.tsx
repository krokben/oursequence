import * as React from "react";

export const Steps = ({ steps, setChosenStepIndex }) => (
  <ul>
    {steps.map((step) => (
      <li key={`step-${step.id}`}>
        <button type="button"></button>
      </li>
    ))}
  </ul>
);

Steps.defaultProps = {
  steps: [],
  setChosenStepIndex: null,
};
