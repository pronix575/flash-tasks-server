"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = __importDefault(require("express"));
const chatController_1 = require("../controllers/chatController");
const auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware"));
exports.chatRouter = express_1.default.Router();
exports.chatRouter.get("/:id/joinToChat", auth_middleware_1.default, chatController_1.chatController.joinToChat);
exports.chatRouter.get("/:id/messages/:messagesNumber", auth_middleware_1.default, chatController_1.chatController.getMessages);
