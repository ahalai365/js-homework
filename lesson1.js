// 2. Заполнить массив повторяющимися значениями

let block = [];

function createAnyBlock(value, amount) {
  for (let i = 0; i < amount; i++) {
  block.push(value);  
  }
}

createAnyBlock(3, 2) //тут вводим значения

console.log(block);


// 3. Задать массив n случайных целых чисел из диапазона [n1;n2]

let randomBlock = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createRandomBlock(n, min, max) {
  for (let i = 0; i < n; i++) {
  randomBlock.push(getRandomIntInclusive(min, max));  
  }
}

createRandomBlock(6, 1, 100) //тут вводим значения

console.log(randomBlock);


// 4. Скопировать массив в другой массив

let blockCopy = [];

function copyAnyBlock (block) {
  for (let i = 0; i < block.length; i++) {
    blockCopy.push(block[i]);
  }
}

copyAnyBlock (randomBlock); // пишем любой блок из существующих и вуаля

console.log(blockCopy);


// 5. Скопировать часть элементов массива на новые позиции (затирая предыдущие элементы)

let arr = [1,2,3,4,5];
const target = 3, //тут вводим значения
     	start = 0,
     	end = 2;

 arr.copyWithin(target, start, end); // для проверки

function changeArray (block) { 
  for (let i = start; i < end; i++)
  block[(target + i)] = block[i];
}

changeArray (arr);
console.log(arr);


// 6. Найти сумму элементов массива

let sumArray = 0;
function getSumArray (block) {
	for (let i = 0; i < block.length; i++) {
  sumArray = sumArray + block[i];
  }  
}

getSumArray (arr);
console.log(sumArray);