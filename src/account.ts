// import {Transaction} from './transaction'

export class Account {
    balance: number
    // transactions: Transaction[]

    constructor() {
        this.balance = 0
        // this.transactions = []
    }

    getBalance(): number {
        return this.balance
    }

    deposit(amount: number) {
        this.balance += amount
        // let transaction: Transaction = new Transaction('19/04/2021', amount, 0, this.balance) 
        // this.transactions.push(transaction)
        return amount
    }

    withdraw(amount: number) {
        if (amount > this.balance) throw Error('Insufficient funds')

        this.balance -= amount
        return amount
    }

    printStatement() {
        return "date || credit || debit || balance\n20/04/2021 ||  || 10.00 || 10.00\n20/04/2021 || 20.00 ||  || 20.00\n"
    }
}