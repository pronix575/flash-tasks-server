"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Chat = new mongoose_1.Schema({
    users: { type: Array, required: true },
    messages: { type: Array },
});
exports.default = (0, mongoose_1.model)('Chat', Chat);
