import { Step, CHOOSE_STEP, StepsActionTypes } from "./types";

export function chooseStep(id: number): StepsActionTypes {
  return {
    type: CHOOSE_STEP,
    id,
  };
}
