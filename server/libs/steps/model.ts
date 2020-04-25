import { Schema, model, Document } from "mongoose";

export interface IStep extends Document {
  id: string;
  drum: string;
}

const StepSchema = new Schema({
  id: String,
  drum: String,
});

export const Step = model<IStep>("Step", StepSchema);

export type StepModel = typeof Step;
