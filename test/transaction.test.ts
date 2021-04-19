import {Transaction} from '../src/transaction'
import {expect} from 'chai'

describe('transaction', () => {
    let transaction

    beforeEach(() => {
        transaction = new Transaction("19/04/2021", 10, 0, 10)
    })
    describe('date', () => {
        it('records the date of transaction', () => {
            expect(transaction.getDate()).to.equal("19/04/2021")
        })
    })

    describe('credit', () => {
        it('records the value being deposited', () => {
            expect(transaction.getCredit()).to.equal(10)
        })
    })

    describe('debit', () => {
        it('records the value being withdrawn', () => {
            expect(transaction.getDebit()).to.equal(0)
        })
    })

    describe('balance', () => {
        it('records the new balance', () => {
            expect(transaction.getBalance()).to.equal(10)
        })
    })
})