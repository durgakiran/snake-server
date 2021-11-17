import Area from './area';
import Snake from './snake';

/**
 * game computation API
 */

const GAME_STATE: Record<string, any> = {};

export function newGame(): string {
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

export function joinGame(gameId: string, name: string) {
    /**
     * if game id does not exist or name already exists send error
     */
    // TODO: throw error
    GAME_STATE[gameId]['users'][name] = {};
    const snake = new Snake(10, 1, { x: 50, y: 50 });
    GAME_STATE[gameId]['users'][name].body = snake.generateSnakeBody();
}

export function createArea() {
    const area = new Area(100, 100);
    return area;
}

export function generateNewRoom(): string {
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

export function getGameState(gameId: string) {
    return GAME_STATE[gameId];
}
