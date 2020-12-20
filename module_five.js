"use strict";
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let itemValue = [];
  for (const item of arr) {
    if (prop === "name") {
      itemValue.push(item.name);
    } else if (prop === "quantity") {
      itemValue.push(item.quantity);
    } else if (prop === "category") {
      itemValue = [];
    }
  }
  return itemValue;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
