"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenService_1 = __importDefault(require("../services/tokenService"));
exports.default = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(res.status(401).send("НЕ авторизован(хидер пуст)"));
        }
        const accessToken = authHeader.split(" ")[1];
        const userData = tokenService_1.default.validateAccessToken(accessToken);
        if (!userData) {
            return next(res.status(401).send("Не валидный accessToken"));
        }
        req.user = userData;
        next();
    }
    catch (e) {
        res.status(401).send(e);
    }
};
