export default class Snake {
    points: { x: number; y: number }[] = [];
    initialPosition: { x: number; y: number };
    length: number;
    size = 1;
    direction = 0;
    speed = 0;
    acceleration = 0;
    minimumVelocity = 2;

    constructor(
        length: number,
        minimumVelocity: number,
        initialPosition: { x: number; y: number }
    ) {
        this.length = length;
        this.minimumVelocity = minimumVelocity;
        this.speed = minimumVelocity;
        this.initialPosition = initialPosition;
    }

    generateSnakePoints() {
        let currentY = this.initialPosition.y;
        const currentX = this.initialPosition.x;
        for (let i = 0; i < this.length; i += 1) {
            this.points.push({ x: currentX, y: currentY });
            currentY += this.size * 2;
        }
        return this.points;
    }

    applyLinkConstraint() {
        const newPoints = [this.points[0]];
        const len = this.size * 1.75;
        for (let i = 1; i < this.points.length; i += 1) {
            // satisfy distance constraint here
            const a = newPoints[i - 1];
            const b = this.points[i];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.hypot(dx, dy);
            const vba = { x: dx / distance || 0, y: dy / distance || 0 };
            const x = a.x - len * vba.x;
            const y = a.y - len * vba.y;
            newPoints.push({ x, y });
        }
        this.points = newPoints;
    }

    generateSnakeBody(): { x: number; y: number }[] {
        this.generateSnakePoints();
        this.applyLinkConstraint();
        return this.points;
    }
}
