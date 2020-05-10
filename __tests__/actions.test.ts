import { chooseStep } from "../src/store/steps/actions";
import { CHOOSE_STEP } from "../src/store/steps/types";

describe("actions", () => {
  it("should create an action to choose step", () => {
    const expectedAction = {
      type: CHOOSE_STEP,
      id: 1,
    };
    expect(chooseStep(1)).toEqual(expectedAction);
  });
});
