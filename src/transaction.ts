export class Transaction {
    date: string
    credit: number

    constructor(date: string, credit: number) {
        this.date = date
        this.credit = credit
    }

    getDate() {
        return this.date
    }

    getCredit() {
        return this.credit
    }
}