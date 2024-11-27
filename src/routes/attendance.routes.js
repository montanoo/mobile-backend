import express from "express";
import {
  joinEvent,
  showJoinedEvents,
} from "../controllers/attendance.controller.js";

const router = express.Router();

router.post("/create", joinEvent);
router.get("/my", showJoinedEvents);

export default router;
