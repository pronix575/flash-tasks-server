import express from "express";
import { check } from "express-validator";
import { userController } from "../controllers/userController";
import authMiddleware from "../middlewares/auth-middleware";

export const userRouter = express.Router();

userRouter.post(
  "/registration",
  [check("login").notEmpty()],
  userController.registration
);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/refresh", userController.refresh);
userRouter.get("/users", authMiddleware, userController.users);
