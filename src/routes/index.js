import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import userRoutes from "./user.routes.js";
import eventRouter from "./event.routes.js";
import attendanceRouter from "./attendance.routes.js";
import commentRouter from "./comment.routes.js";
import ratingRouter from "./rating.routes.js";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

router.use("/user", userRoutes);

router.use("/event", authMiddleware, eventRouter);

router.use("/attendance", authMiddleware, attendanceRouter);

router.use("/comments", authMiddleware, commentRouter);

router.use("/ratings", authMiddleware, ratingRouter);

export default router;
