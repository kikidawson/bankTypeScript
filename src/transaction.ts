export class Transaction {
    date: string
    credit: number
    debit: number
    balance: number

    constructor(date: string, credit: number, debit: number, balance: number) {
        this.date = date
        this.credit = credit
        this.debit = debit
        this.balance = balance
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

    getBalance() {
        return this.balance
    }
}