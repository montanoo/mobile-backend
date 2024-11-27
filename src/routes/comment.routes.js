import express from "express";
import { comment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", comment);

export default router;
