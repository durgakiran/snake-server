"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  A web socket server for game state communication
 */
const http_1 = require("http");
const const_1 = require("./src/common/const");
const socket_io_1 = require("socket.io");
const game_1 = require("./src/game");
const server = (0, http_1.createServer)();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
    },
});
io.on('connection', (socket) => {
    /**
     * create new room id for the game
     */
    socket.on('createRoom', () => {
        const roomId = (0, game_1.newGame)();
        socket.emit('createdRoom', roomId);
    });
    socket.on('joinRoom', () => {
        const roomId = (0, game_1.newGame)();
        socket.emit(roomId);
    });
    socket.on('selectName', (data) => {
        (0, game_1.joinGame)(data.gameId, data.name);
        socket.emit('initialState', (0, game_1.getGameState)(data.gameId));
    });
    socket.on('message', (data) => {
        //
    });
});
server.listen(const_1.PORT, () => {
    console.log(`Server running at http://localhost:${const_1.PORT}`);
});
//# sourceMappingURL=index.js.map