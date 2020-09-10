import { Router } from "express";
import asyncHandler from "express-async-handler";

import { Radar } from "../handlers/radar";

const router = Router();

router.post("/", asyncHandler(Radar));

export default router;
