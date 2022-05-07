"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dto {
    constructor(model) {
        this.id = model._id;
        this.login = model.login;
    }
}
exports.default = Dto;
