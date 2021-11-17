/**
 *  A web socket server for game state communication
 */
import { createServer } from 'http';
import { PORT } from './src/common/const';
import { Server, Socket } from 'socket.io';
import { getGameState, joinGame, newGame } from './src/game';

const server = createServer();
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
    },
});

io.on('connection', (socket: Socket) => {
    /**
     * create new room id for the game
     */
    socket.on('createRoom', () => {
        const roomId = newGame();
        socket.emit('createdRoom', roomId);
    });

    socket.on('joinRoom', () => {
        const roomId = newGame();
        socket.emit(roomId);
    });

    socket.on('selectName', (data) => {
        joinGame(data.gameId, data.name);
        socket.emit('initialState', getGameState(data.gameId));
    });

    socket.on('message', (data) => {
        //
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
