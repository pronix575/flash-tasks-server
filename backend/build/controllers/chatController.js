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
exports.chatController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const chat_model_1 = __importDefault(require("../models/chat-model"));
class ChatController {
    joinToChat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = [req.user.id, req.params.id].sort();
                let chat = yield chat_model_1.default.findOne({ users });
                if (!chat) {
                    chat = yield chat_model_1.default.create({ users });
                }
                return res.json(chat._id);
            }
            catch (error) { }
        });
    }
    getMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new mongoose_1.default.Types.ObjectId(req.params.id);
            const chat = yield chat_model_1.default.findById(id);
            if (chat.messages.length <= req.params.messagesNumber) {
                return res.json(chat.messages);
            }
            const length = chat.messages.length;
            const messages = chat.messages.slice(length - req.params.messagesNumber, length);
            return res.json(messages);
        });
    }
    sendMessage(socket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                socket.on("send_message", (data) => __awaiter(this, void 0, void 0, function* () {
                    const { text = "", author = "", id = "", numberOfMessages = 0, } = Object.assign({}, data);
                    const chat = yield chat_model_1.default.findById(id);
                    chat.messages = [...chat.messages, { text, author }];
                    chat.save();
                    if (chat.messages.length <= numberOfMessages) {
                        return chat.messages;
                    }
                    const length = chat.messages.length;
                    const messages = chat.messages.slice(length - numberOfMessages - 1, length);
                    socket.to(data.id).emit(`receive_messages`, messages);
                }));
            }
            catch (error) { }
        });
    }
}
exports.chatController = new ChatController();
