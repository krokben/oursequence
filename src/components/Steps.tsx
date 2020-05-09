import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store";
import { CHOOSE_STEP } from "../store/steps/types";

export default () => {
  const steps = useSelector((state: AppState) => state.steps);
  const dispatch = useDispatch();

  return (
    <ul>
      {steps.map((step) => (
        <li key={`step-${step.id}`}>
          <button
            type="button"
            onClick={() => dispatch({ type: CHOOSE_STEP, id: step.id })}
          ></button>
        </li>
      ))}
    </ul>
  );
};
