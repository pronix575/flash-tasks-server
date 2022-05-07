import express from "express";
import { check } from "express-validator";
import { userController } from "../controllers/userController";
import authMiddleware from "../middlewares/auth-middleware";
import swaggerUi  from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

export const userRouter = express.Router();

userRouter.use('/api-docs', swaggerUi.serve);
userRouter.get('/api-docs', swaggerUi.setup(swaggerDocument));

userRouter.post(
  "/registration",
  [check("login").notEmpty()],
  userController.registration
);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/refresh", userController.refresh);
userRouter.get("/users", authMiddleware, userController.users);
