import {Account} from '../src/account'
import {expect} from 'chai'

describe('bank account', () => {
    let account: Account

    beforeEach(() => {
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

        it('adds multiple deposited amounts to balance', () => {
            account.deposit(10)
            account.deposit(5)
            expect(account.getBalance()).to.equal(15)
        })
    })

    describe('withdraw', () => {
        it('returns 10 if 10 is withdrawn', () => {
            account.deposit(10)
            expect(account.withdraw(10)).to.equal(10)
        })

        it('returns 5 if 5 is withdrawn', () => {
            account.deposit(10)
            expect(account.withdraw(5)).to.equal(5)
        })

        it('subtracts withdrawn amount from balance', () => {
            account.deposit(10)
            account.withdraw(10)
            expect(account.getBalance()).to.equal(0)
        })

        it('should throw error if withdrawal more than balance', () => {
            expect(() => account.withdraw(10)).to.throw(Error, /Insufficient funds/)
        })
    })

    describe('statement', () => {
        it('prints a chronological list of transactions', () => {
            account.deposit(20)
            account.withdraw(10)
            expect(account.printStatement()).to.equal("date || credit || debit || balance\n20/04/2021 ||  || 10.00 || 10.00\n20/04/2021 || 20.00 ||  || 20.00\n")
        })
    })
})