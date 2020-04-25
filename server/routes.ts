import * as express from "express";
import { stepService } from "./libs/services";

const router = express.Router();

router.get("/steps", async (req, res) =>
  res.json(await stepService.getSteps())
);

export { router };
