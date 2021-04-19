export class Transaction {
    date: string

    constructor(date: string) {
        this.date = date
    }

    getDate() {
        return this.date
    }
}