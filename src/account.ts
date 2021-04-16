export class Account {
    balance: number

    constructor() {
        this.balance = 0
    }

    getBalance(): number {
        return this.balance
    }

    deposit(amount: number) {
        this.balance += amount
        return amount
    }

    withdraw(amount: number) {
        this.balance -= amount
        return amount
    }
}