"use strict";
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = function (employees) {
  // let bestWorkCount = 0;
  // let bestWorkCountName;
  // const employeesValues = Object.values(employees);
  // const employeesKeyes = Object.keys(employees);
  // for (const best of employeesValues) {
  //   if (best > bestWorkCount) {
  //     bestWorkCount = best;
  //   }
  // }
  // for (let i = 0; i < employeesValues.length; i++) {
  //   if (employeesValues[i] === bestWorkCount) {
  //     bestWorkCountName = employeesKeyes[i];
  //   }
  // }
  // return `Найпродуктивніший співробітник - ${bestWorkCountName}, кількість виконаних завдань: ${bestWorkCount}`;
  let countWork = 0;
  let workerName = "";
  for (const worker in employees) {
    if (employees[worker] > countWork) {
      countWork = employees[worker];
      workerName = worker;
    }
  }
  return `Найпродуктивніший співробітник - ${workerName}, кількість виконаних завдань: ${countWork}`;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
