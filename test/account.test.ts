import {Account} from '../src/account'
import {expect} from 'chai'

describe('bank account', () => {
    it('starts with a balance of zero', () => {
        let account = new Account()
        expect(account.getBalance()).to.equal(0)
    })

})