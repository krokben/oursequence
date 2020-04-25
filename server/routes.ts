import * as express from "express";

const router = express.Router();

router.get("/steps", async (req, res) =>
  res.json(["step1", "step2"])
);

export { router };
