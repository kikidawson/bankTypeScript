# Bank TypeScript

### Requirements

- You should be able to interact with your code via a REPL.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Setup 

Clone repo, install dependencies, run tests.

```bash
$ git clone https://github.com/kikidawson/bankTypeScript.git
$ cd bankTypeScript
$ npm install
$ npm test
```

## Planning

| Class | Account |
| -------- | -------- |
| Properties | transaction |
| Functions | deposit, withdraw, printStatement |

| Class | Transactions |
| -------- | -------- |
| Properties | date, debit, credit, balance |
| Functions |  |

| Class | Statement |
| -------- | -------- |
| Properties | transactions |
| Functions | print |
