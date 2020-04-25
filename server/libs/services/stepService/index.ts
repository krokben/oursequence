import { StepModel, IStep, Step } from "../../steps/model";
import { ICreateStepRequest, IUpdateStepRequest } from "../../steps";

export class StepService {
  private stepModel: StepModel;

  constructor(stepModel: StepModel) {
    this.stepModel = stepModel;
  }

  async getSteps(): Promise<IStep[]> {
    return this.stepModel.find({});
  }

  async getStep(id: string): Promise<IStep> {
    return this.stepModel.findOne({ id });
  }

  async createStep(req: ICreateStepRequest): Promise<IStep> {
    const step = new Step({ id: "1", drum: "kick" });
    return await step.save();
  }

  async updateStep(id: string, req: IUpdateStepRequest): Promise<IStep> {
    const step = await this.getStep(id);

    step.drum = req.drum;

    return await step.save();
  }
}
