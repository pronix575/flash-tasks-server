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
exports.userService = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const tokenService_1 = __importDefault(require("./tokenService"));
const token_model_1 = __importDefault(require("../models/token-model"));
class UserService {
    registration(name, email, password, confirmationPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password !== confirmationPassword) {
                throw new Error('Пароли не совпадают');
            }
            const canditate = yield user_model_1.default.findOne({ name });
            if (canditate) {
                throw new Error('Пользователь с таким именем существует');
            }
            const hashPassword = bcryptjs_1.default.hashSync(password, 5);
            const user = new user_model_1.default({ name, email, password: hashPassword });
            const tokens = tokenService_1.default.generateToken({ id: user._id });
            yield user.save();
            yield tokenService_1.default.saveToken(user._id, tokens.refreshToken);
            return Object.assign({}, tokens);
        });
    }
    login(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.default.findOne({ login });
            if (!user) {
                throw new Error("User not found");
            }
            const validPassword = bcryptjs_1.default.compareSync(password, user.password);
            if (!validPassword) {
                throw new Error("Password is not correct");
            }
            const tokens = tokenService_1.default.generateToken(Object.assign({}, user));
            yield tokenService_1.default.saveToken(user._id, tokens.refreshToken);
            return Object.assign({}, tokens);
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield tokenService_1.default.removeToken(refreshToken);
            return token;
        });
    }
    refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw new Error("Refresh token is not correct");
            }
            const id = tokenService_1.default.validateRefreshToken(refreshToken);
            const tokenfromDB = yield token_model_1.default.findOne({ refreshToken });
            if (!id || !tokenfromDB) {
                throw new Error("Refresh token is not found");
            }
            const user = yield user_model_1.default.findById(id);
            const tokens = tokenService_1.default.generateToken(Object.assign({}, user));
            yield tokenService_1.default.saveToken(user._id, tokens.refreshToken);
            return Object.assign({}, tokens);
        });
    }
}
exports.userService = new UserService();
