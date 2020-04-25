import { StepService } from "..";
import { StepModel } from "../../../steps/model";

describe("Test", () => {
  it("gets all steps", async () => {
    const findFunc = jest.fn().mockReturnValue([]);
    const model: StepModel = {
      find: findFunc,
    } as any;
    const service = new StepService(model);
    const result = await service.getSteps();
    expect(result).toEqual([]);
  });

  it("updates step", async () => {
    const saveFunc = jest.fn().mockReturnThis();
    const findFunc = jest
      .fn()
      .mockReturnValue(
        Promise.resolve({ id: "1", drum: "kick", save: saveFunc })
      );
    const model: StepModel = {
      findOne: findFunc,
    } as any;
    const service = new StepService(model);
    const result = await service.updateStep("1", { drum: "hihat" });
    expect(saveFunc).toBeCalledTimes(1);
    expect(result).toEqual({ id: "1", drum: "hihat", save: saveFunc });
  });
});
