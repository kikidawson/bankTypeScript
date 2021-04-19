import {Transaction} from '../src/transaction'
import {expect} from 'chai'

describe('transaction', () => {
    describe('deposit', () => {
        it('records the date of transaction', () => {
            let transaction = new Transaction("19/04/2021")
            expect(transaction.getDate()).to.equal("19/04/2021")
        })
    })
})