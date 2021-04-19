import {Transaction} from '../src/transaction'
import {expect} from 'chai'

describe('transaction', () => {
    describe('date', () => {
        it('records the date of transaction', () => {
            let transaction = new Transaction("19/04/2021", 10, 0)
            expect(transaction.getDate()).to.equal("19/04/2021")
        })
    })

    describe('credit', () => {
        it('records the value being deposited', () => {
            let transaction = new Transaction("19/04/2021", 10, 0)
            expect(transaction.getCredit()).to.equal(10)
        })
    })

    describe('debit', () => {
        it('records the value being withdrawn', () => {
            let transaction = new Transaction("19/04/2021", 10, 0)
            expect(transaction.getDebit()).to.equal(0)
        })
    })
})