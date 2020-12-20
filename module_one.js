"use strict";
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  newHobby(hobbyValue) {
    this.hobby = hobbyValue;
  },
  newPremiun(premiumValue) {
    this.premium = premiumValue;
  },
};

const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key} ${user[key]}`);
}

user.mod = "happy";
user.newHobby("skydiving"); // или usre.hobby = "skydiving"; и убрать функцию внутри чтоб не мешала в consol.log
user.newPremiun(false); // или user.premium = false; и убрать функцию внутри чтоб не мешала в consol.log
