import { stepsReducer } from "../src/store/steps/reducers";
import { CHOOSE_STEP } from "../src/store/steps/types";

describe("steps reducer", () => {
  const stubState = [
    { id: 1, drum: "kick", chosen: false },
    { id: 2, drum: "snare", chosen: false },
  ];

  it("should handle CHOOSE_STEP", () => {
    expect(
      stepsReducer(stubState, {
        type: CHOOSE_STEP,
        id: 1,
      })
    ).toEqual([
      { id: 1, drum: "kick", chosen: true },
      { id: 2, drum: "snare", chosen: false },
    ]);

    expect(
      stepsReducer(stubState, {
        type: CHOOSE_STEP,
        id: 2,
      })
    ).toEqual([
      { id: 1, drum: "kick", chosen: false },
      { id: 2, drum: "snare", chosen: true },
    ]);
  });
});
