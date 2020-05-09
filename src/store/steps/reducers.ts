import { StepsState, StepsActionTypes, CHOOSE_STEP } from "./types";

const initialState = [
  { id: 1, drum: "kick", chosen: false },
  { id: 2, drum: "snare", chosen: false },
];

export function stepsReducer(
  state = initialState,
  action: StepsActionTypes
): StepsState {
  switch (action.type) {
    case CHOOSE_STEP:
      return state.map((step) =>
        step.id === action.id
          ? { ...step, chosen: true }
          : { ...step, chosen: false }
      );
    default:
      return state;
  }
}
