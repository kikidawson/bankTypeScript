import {Account} from '../src/account'
import {expect} from 'chai'

describe('bank account', () => {
    let account: Account

    beforeEach(function() {
        account = new Account()
    })

    describe('balance', () => {
        it('starts with a balance of zero', () => {
            expect(account.getBalance()).to.equal(0)
        })
    })

    describe('deposit', () => {
        it('returns 10 if 10 is deposited', () => {
            expect(account.deposit(10)).to.equal(10)
        })

        it('returns 5 if 5 is deposited', () => {
            expect(account.deposit(5)).to.equal(5)
        })

        it('adds deposited amount to balance', () => {
            account.deposit(10)
            expect(account.getBalance()).to.equal(10)
        })
    })

})