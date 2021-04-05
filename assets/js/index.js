"use strict";

/*2. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.*/

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
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