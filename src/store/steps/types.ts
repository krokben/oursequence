export interface Step {
  id: number;
  drum: string;
  chosen: boolean;
}

export type StepsState = Step[];

export const CHOOSE_STEP = "CHOOSE_STEP";

interface ChooseStepAction {
  type: typeof CHOOSE_STEP;
  id: number;
}

export type StepsActionTypes = ChooseStepAction;
