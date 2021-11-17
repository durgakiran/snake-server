import crypto from 'crypto';

export default function generateAcceptValue(socketKey: string): string {
    return crypto
        .createHash('sha1')
        .update(socketKey + '258EAFA5-E914–47DA-95CA-C5AB0DC85B11', 'binary')
        .digest('base64');
}
