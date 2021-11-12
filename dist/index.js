"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  A web socket server for game state communication
 */
const http_1 = __importDefault(require("http"));
const const_1 = require("./src/common/const");
const server = http_1.default.createServer();
server.listen(const_1.PORT, () => console.log(`Server running at http://localhost:${const_1.PORT}`));
//# sourceMappingURL=index.js.map