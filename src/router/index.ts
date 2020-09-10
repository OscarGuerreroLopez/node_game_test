import { Router } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

import meta from "./meta";
import errorTest from "./errorTest";
import radar from "./radar";

const router = Router();

// middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors({ credentials: true, origin: true }));

// routes
router.use("/meta", meta);
router.use("/error", errorTest);
router.use("/radar", radar);

export default router as Router;
