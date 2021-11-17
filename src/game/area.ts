export default class Area {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    get state(): [number, number] {
        return [this.width, this.height];
    }
}
