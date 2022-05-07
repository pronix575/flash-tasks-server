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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_model_1 = __importDefault(require("../models/token-model"));
class TokenService {
    generateToken(payload) {
        const accessToken = jsonwebtoken_1.default.sign(payload, "Secret", { expiresIn: "15m" });
        const refreshToken = jsonwebtoken_1.default.sign(payload, "SecretRefresh", { expiresIn: "10d" });
        return {
            accessToken,
            refreshToken
        };
    }
    validateAccessToken(token) {
        const userData = jsonwebtoken_1.default.verify(token, "Secret");
        return userData;
    }
    validateRefreshToken(token) {
        const userData = jsonwebtoken_1.default.verify(token, "SecretRefresh");
        return userData;
    }
    saveToken(userId, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.findOne({ user: userId });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                return tokenData.save();
            }
            const token = yield token_model_1.default.create({ user: userId, refreshToken });
            return token;
        });
    }
    removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.deleteOne({ refreshToken });
            return tokenData;
        });
    }
}
exports.default = new TokenService();
