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
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRouter_1 = require("./router/userRouter");
const chatRouter_1 = require("./router/chatRouter");
const chatController_1 = require("./controllers/chatController");
const app = (0, express_1.default)();
const port = 8000;
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use("/chat", chatRouter_1.chatRouter);
app.use("/api", userRouter_1.userRouter);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});
io.on("connection", (socket) => {
    socket.on('join', (idOfChat) => {
        socket.join(idOfChat);
    });
    chatController_1.chatController.sendMessage(socket);
    socket.on('disconnected', (idOfChat) => {
        socket.leave(idOfChat);
    });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://Rinasik:qwerty123@data.vd0po.mongodb.net/messengerData?retryWrites=true&w=majority");
        server.listen(port, () => {
            console.log(`🚀 Example app listening on port ${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
