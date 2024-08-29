export class SqlError extends Error {
    number: number;

    constructor(message: string, number: number) {
        super(message);
        this.number = number;
    }
}
