"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_validator_1 = require("express-validator");
const user_model_1 = __importDefault(require("../models/user-model"));
const userService_1 = require("../services/userService");
class UserController {
    registration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ message: "error" });
                }
                const { login, password } = req.body;
                const userData = yield userService_1.userService.registration(login, password);
                res.cookie('refreshToken', userData === null || userData === void 0 ? void 0 : userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(userData);
            }
            catch (e) {
                res.status(401).json(e.message);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                const userData = yield userService_1.userService.login(login, password);
                res.cookie('refreshToken', userData === null || userData === void 0 ? void 0 : userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(userData);
            }
            catch (e) {
                res.status(401).json(e.message);
            }
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const data = yield userService_1.userService.logout(refreshToken);
                res.clearCookie('refreshToken');
                return res.status(200).send();
            }
            catch (e) { }
        });
    }
    refresh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield userService_1.userService.refresh(refreshToken);
                res.cookie('refreshToken', userData === null || userData === void 0 ? void 0 : userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                return res.json(userData);
            }
            catch (e) {
                return res.status(401).json(e.message);
            }
        });
    }
    users(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_model_1.default.find();
                res.json(users);
            }
            catch (e) { }
        });
    }
}
exports.userController = new UserController();
