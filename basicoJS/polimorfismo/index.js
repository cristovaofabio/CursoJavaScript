function Account(branch, bankAccount, balance) {
    this.branch = branch;
    this.bankAccount = bankAccount;
    this.balance = balance;
};

Account.prototype.withdraw = function (value) {
    if (value > this.balance) {
        console.log('Insufficient balance');
    }
    else {
        this.balance = this.balance - value;
    }
    this.seeBalance();
};

Account.prototype.deposit = function (value) {
    this.balance = this.balance + value;
    this.seeBalance();
};

Account.prototype.seeBalance = function () {
    console.log(`Balance: ${this.balance}`);
};

const account = new Account(22, 4324234, 100);
//account.deposit(250);
//account.withdraw(325);
//account.withdraw(400);

function CurrentAccount(branch, bankAccount, balance, limit) {
    Account.call(this, branch, bankAccount, balance);
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function (value) {
    if (value > (this.balance + this.limit)) {
        console.log('Operation not allowed');
    }
    else {
        this.balance = this.balance - value;
    }
    this.seeBalance();
};

const currentAccount = new CurrentAccount(10, 4324523, 20, 100);

currentAccount.seeBalance();
currentAccount.withdraw(50);
currentAccount.withdraw(71);