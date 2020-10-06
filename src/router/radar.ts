import { Router } from "express";
import asyncHandler from "express-async-handler";
import { RadarCheckMiddleware } from "../middleware/radarCheck.middleware";

import { Radar } from "../handlers/radar";

const router = Router();

router.post("/", RadarCheckMiddleware, asyncHandler(Radar));

export default router;
