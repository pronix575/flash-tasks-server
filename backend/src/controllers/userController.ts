import { validationResult } from "express-validator";
import userModel from "../models/user-model";
import { userService } from "../services/userService";

class UserController {
  async registration(req: any, res: any) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "error" });
      }
      const { name, email, password, confirmationPassword } = req.body;
      const tokens = await userService.registration(
        name,
        email,
        password,
        confirmationPassword
      );

      res.cookie("refreshToken", tokens?.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(tokens);
    } catch (e: any) {
      res.status(401).json(e.message);
    }
  }
  async login(req: any, res: any) {
    try {
      const { login, password } = req.body;
      const userData = await userService.login(login, password);
      res.cookie("refreshToken", userData?.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e: any) {
      res.status(401).json(e.message);
    }
  }
  async logout(req: any, res: any) {
    try {
      const { refreshToken } = req.cookies;
      const data = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");

      return res.status(200).send();
    } catch (e) {}
  }
  async refresh(req: any, res: any) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await userService.refresh(refreshToken);

      res.cookie("refreshToken", userData?.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e: any) {
      return res.status(401).json(e.message);
    }
  }

  async users(req: any, res: any) {
    try {
      const users = await userModel.find();
      res.json(users);
    } catch (e) {}
  }
}

export const userController = new UserController();
