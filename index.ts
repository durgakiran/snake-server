/**
 *  A web socket server for game state communication
 */
import http from 'http';
import { PORT } from './src/common/const';

const server = http.createServer();
server.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
