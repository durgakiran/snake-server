"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameState = exports.generateNewRoom = exports.createArea = exports.joinGame = exports.newGame = void 0;
const area_1 = __importDefault(require("./area"));
const snake_1 = __importDefault(require("./snake"));
/**
 * game computation API
 */
const GAME_STATE = {};
function newGame() {
    // ganerate new game ID
    const newRoomId = generateNewRoom();
    // create local game state
    GAME_STATE[newRoomId] = {};
    // create new game area
    const area = createArea();
    GAME_STATE[newRoomId]['area'] = area.state;
    GAME_STATE[newRoomId]['users'] = {};
    return newRoomId;
}
exports.newGame = newGame;
function joinGame(gameId, name) {
    /**
     * if game id does not exist or name already exists send error
     */
    // TODO: throw error
    GAME_STATE[gameId]['users'][name] = {};
    const snake = new snake_1.default(10, 1, { x: 50, y: 50 });
    GAME_STATE[gameId]['users'][name].body = snake.generateSnakeBody();
}
exports.joinGame = joinGame;
function createArea() {
    const area = new area_1.default(100, 100);
    return area;
}
exports.createArea = createArea;
function generateNewRoom() {
    /**
     * 1. generate 4 character long string
     * 2. check if the string is unique
     * 3. regenerate if not unique
     */
    const randomId = Math.round(1000 + Math.random() * 9000);
    if (!GAME_STATE[randomId + '']) {
        return randomId + '';
    }
    return generateNewRoom();
}
exports.generateNewRoom = generateNewRoom;
function getGameState(gameId) {
    return GAME_STATE[gameId];
}
exports.getGameState = getGameState;
//# sourceMappingURL=index.js.map