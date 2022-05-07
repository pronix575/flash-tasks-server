"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const userController_1 = require("../controllers/userController");
const auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware"));
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/registration', [(0, express_validator_1.check)("login").notEmpty()], userController_1.userController.registration);
exports.userRouter.post('/login', userController_1.userController.login);
exports.userRouter.post('/logout', userController_1.userController.logout);
exports.userRouter.get('/refresh', userController_1.userController.refresh);
exports.userRouter.get('/users', auth_middleware_1.default, userController_1.userController.users);
