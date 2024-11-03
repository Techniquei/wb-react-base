var DebitAccount = /** @class */ (function () {
    function DebitAccount() {
        this.balance = 0;
        console.log('Создан дебетовый счет');
    }
    DebitAccount.prototype.replenish = function (sum) {
        if (sum <= 0) {
            console.log('сумма пополнения должна быть положительной');
            return;
        }
        this.balance += sum;
        console.log("\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 ".concat(sum, "\u0440"));
    };
    DebitAccount.prototype.withdraw = function (sum) {
        if (this.balance - sum < 0) {
            console.log("\u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0435 \u0434\u043B\u044F \u0441\u043D\u044F\u0442\u0438\u044F ".concat(sum, "\u0440"));
            return;
        }
        console.log("\u0441\u043D\u044F\u0442\u0438\u0435 ".concat(sum, "\u0440"));
        this.balance -= sum;
    };
    DebitAccount.prototype.checkBalance = function () {
        console.log("\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ".concat(this.balance, "\u0440"));
    };
    return DebitAccount;
}());
var CreditAccount = /** @class */ (function () {
    function CreditAccount(limit) {
        this.balance = limit;
        this.limit = limit;
        console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u0441 \u043B\u0438\u043C\u0438\u0442\u043E\u043C ".concat(limit));
    }
    CreditAccount.prototype.replenish = function (sum) {
        if (sum <= 0) {
            console.log('сумма пополнения должна быть положительной');
            return;
        }
        this.balance += sum;
        console.log("\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 ".concat(sum, "\u0440"));
    };
    CreditAccount.prototype.withdraw = function (sum) {
        if (this.balance - sum < 0) {
            console.log("\u0441\u043D\u044F\u0442\u0438\u0435 ".concat(sum, "\u0440 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043B\u0438\u043C\u0438\u0442"));
            return;
        }
        this.balance -= sum;
        console.log("\u0441\u043D\u044F\u0442\u0438\u0435 ".concat(sum, "\u0440"));
        if (!this.balance)
            console.log('кредитный лимит исчерпан');
    };
    CreditAccount.prototype.checkBalance = function () {
        console.log("\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ".concat(this.balance, "\u0440"));
    };
    CreditAccount.prototype.checkDebt = function () {
        console.log("\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0434\u043E\u043B\u0433: ".concat(this.limit - this.balance, "\u0440"));
    };
    return CreditAccount;
}());
var debitAccount = new DebitAccount();
debitAccount.replenish(100);
debitAccount.checkBalance();
debitAccount.withdraw(150);
debitAccount.withdraw(75);
debitAccount.checkBalance();
debitAccount.replenish(-100);
var creditAccount = new CreditAccount(200);
creditAccount.replenish(100);
creditAccount.checkBalance();
creditAccount.withdraw(150);
creditAccount.withdraw(75);
creditAccount.checkBalance();
creditAccount.checkDebt();
creditAccount.withdraw(150);
creditAccount.withdraw(75);
creditAccount.replenish(-100);
creditAccount.replenish(100);
