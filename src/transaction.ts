export class Transaction {
    date: string
    credit: number
    debit: number

    constructor(date: string, credit: number, debit: number) {
        this.date = date
        this.credit = credit
        this.debit = debit
    }

    getDate() {
        return this.date
    }

    getCredit() {
        return this.credit
    }

    getDebit() {
        return this.debit
    }
}