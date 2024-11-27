import express from "express";
import { createEvent, showEvents } from "../controllers/event.controller.js";

const router = express.Router();

router.get("/all", showEvents);
router.post("/create", createEvent);

export default router;
