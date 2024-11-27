import express from "express";
import { createRating } from "../controllers/rating.controller.js";

const router = express.Router();

router.post("/create", createRating);

export default router;
