interface Account {
    balance: number;
    limit?: number;
    replenish: (sum: number) => void;
    withdraw: (sum: number) => void;
    checkBalance: () => void;
    checkDebt?: () => void;
}

class DebitAccount implements Account {
    balance: number;

    constructor() {
        this.balance = 0
        console.log('Создан дебетовый счет');
    }

    replenish(sum: number) {
        if (sum <= 0) {
            console.log('сумма пополнения должна быть положительной');

            return;
        }

        this.balance += sum;
        console.log(`пополнение на ${sum}р`);
    }

    withdraw(sum: number) {
        if (this.balance - sum < 0) {
            console.log(`недостаточно денег на балансе для снятия ${sum}р`);

            return;
        }

        console.log(`снятие ${sum}р`);
        this.balance -= sum;
    }

    checkBalance() {
        console.log(`текущий баланс: ${this.balance}р`);
    }
}

class CreditAccount implements Account {
    balance: number;
    limit: number

    constructor(limit: number) {
        this.balance = limit;
        this.limit = limit;
        console.log(`Создан кредитный счет с лимитом ${limit}`);
    }

    replenish(sum: number) {
        if (sum <= 0) {
            console.log('сумма пополнения должна быть положительной');

            return;
        }

        this.balance += sum;
        console.log(`пополнение на ${sum}р`);
    }

    withdraw(sum: number) {
        if (this.balance - sum < 0) {
            console.log(`снятие ${sum}р невозможно, превышен кредитный лимит`);

            return;
        }

        this.balance -= sum;
        console.log(`снятие ${sum}р`);

        if (!this.balance) console.log('кредитный лимит исчерпан');
    }

    checkBalance() {
        console.log(`текущий баланс: ${this.balance}р`);
    }

    checkDebt() {
        console.log(`текущий долг: ${this.limit - this.balance}р`);
    }
}

const debitAccount = new DebitAccount();
debitAccount.replenish(100);
debitAccount.checkBalance();
debitAccount.withdraw(150);
debitAccount.withdraw(75);
debitAccount.checkBalance();
debitAccount.replenish(-100);

const creditAccount = new CreditAccount(200);
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
