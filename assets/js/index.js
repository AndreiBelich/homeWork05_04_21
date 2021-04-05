"use strict";

/*2. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.*/

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumbers = [];
const ARRAY_SIZE = 10;
const MIN_VALUE = 100;
const MAX_VALUE = 200;
for(let i = 0; i < ARRAY_SIZE; i++){
  randomNumbers.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
}

randomNumbers.forEach(function(element, index){
  console.log(`Current index ${index}, value = ${element}`);
});

/*3. Создать функцию, которая принимает amout - количество создаваемых объектов,
создает указанное кол-во объектов пользователей с полями email, age, isMale.
Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
Поле isMale заполняется рандомно значениями true или false.*/

function User(email, age, isMale){
  this.email = email;
  this.age = age;
  this.isMale = isMale;
}

User.prototype.toString = function(){
  return `email: ${this.email}, age: ${this.age}, isMale: ${this.isMale}`;
}

function usersFactory(amount){
  const users = [];
  const from = 12;
  const to = 50;
  for(let i = 0; i < amount; i++){
    const email = `user${i}@gmail.com`;
    const age = Math.floor(Math.random() * (to - from + 1) + from);
    const isMale = !!Math.floor(Math.random() * 2);
    const user = new User(email, age, isMale);
    users.push(user);
  }
  return users;
}

const POPULATION = 25;
const users = usersFactory(POPULATION);
users.forEach(function(item, index){
  console.log(`Info about user № ${index}: ${item}\n---------------------------------------------------------------------`);
});