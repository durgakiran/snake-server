"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function generateAcceptValue(socketKey) {
    return crypto_1.default
        .createHash('sha1')
        .update(socketKey + '258EAFA5-E914–47DA-95CA-C5AB0DC85B11', 'binary')
        .digest('base64');
}
exports.default = generateAcceptValue;
//# sourceMappingURL=socketAcceptValue.js.map