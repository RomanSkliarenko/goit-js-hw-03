"use strict";

// Завдання 7 - додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    let transactionObj = {};
    transactionObj.id = 0;
    transactionObj.type = type;
    transactionObj.amount = amount;
    return transactionObj;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if (amount) {
      this.balance += amount;
    }
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    for (const item of this.transactions) {
      if (item.id === this.createTransaction(amount, Transaction.DEPOSIT).id) {
        item.id += 1;
        return;
      }
    }
    // let newObj = this.createTransaction(amount, Transaction.DEPOSIT);

    // for (let i = 0; i < this.transactions.length; i++) {
    //   if (this.transactions[i].id === newObj.id) {
    //     newObj.id += 1;
    //     this.transactions.push(newObj);
    //     return;
    //   }
    // }
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount) {
      this.balance -= amount;
    }
    // this.createTransaction(amount, "deposit");
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    console.log(this.balance);
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

account.createTransaction(500, "deposit");

account.deposit(500);
account.deposit(100);
account.withdraw(200);
account.getBalance();
console.log(account.balance);
console.table(account.transactions);
account.getTransactionDetails(14273);
