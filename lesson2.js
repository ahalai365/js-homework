// map - создает новый массив, где каждый элемент соответственно преобразован функцией
// принимает массив и функцию-преобразователь; возвращает новый массив

console.log(
  [1, 2, 3].map(function(element) { return element + 2 })
);


const randomMassive = [1, 2, 3];
let newMassive = [];

function map2 (massive, change) {
  for (let i = 0; i < massive.length; i++) {
  	massive[i] = massive[i] + change;
    newMassive.push(massive[i]);
  }
};

map2 (randomMassive, 2);

console.log(newMassive); // Под умножение тоже самое только нужно поменять знак

// forEach - просто проходит по массиву и передает каждый элемент в функцию
// принимает массив и функцию преобразователь; не возвращает ничего

[1, 2, 3].forEach(function(element) {
  console.log(element);
})

let massiveElement;
let massiveForEach = [1, 2, 3];
function forEach2 (massive) {
	for (let i = 0; i < massive.length; i++) {
  	result = massive[i]
    console.log(result);
  }
}
forEach2 (massiveForEach); // то что надо, но не понимаю как вевести по очереди каждое значение

// find - находит первый элемент, который удовлетворяет условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает первый удачный элемент
// если элемента не нашлось - возвращает undefined

console.log(
  [1, 2, 3].find(function(element) { return element === 1 })
);

const rndMassiveFind = [1, 2, 3];
const findElement = 1;

function find (massive) {
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] === findElement) {
      return massive[i];
    } 
  }
};

console.log(find(rndMassiveFind));

// filter - создает новый массив, в который кладет только те элементы, которые удовлетворяют условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// Возвращает массив из всех элементов, которые подошли(функция сказала да)

console.log(
  [1, 2, 3, 4].filter(function(element) { return element % 2 === 0 })
)

const rndMassiveFilter = [1, 2, 3, 4];
const filtered = [];

function filter(massive) {
  for (let i = 0; i < massive.length; i++) {
  	if (massive[i] % 2 === 0) {
    	filtered.push(massive[i])  
    }  
  }
}

filter(rndMassiveFilter);

console.log(filtered);

// some - отвечает на вопрос "есть ли хоть один элемент, удовлетворяющий условию"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если хоть один элемент в массиве удовлетворяет функции

console.log(
  [1, 2, 3].some(function(element) { return element % 2 === 0 })
)

const rndMassiveSome = [1, 2, 3];

function some(massive) {
  for (let i = 0; i < massive.length; i++) {
  	if (massive[i] % 2 === 0) {
    	return true;
    } else {
      if (i === (massive.length - 1)) {
        return false;
      }
    } 
  }
}

console.log(some(rndMassiveSome));

// every - отвечает на вопрос "каждый ли элемент удовлетворяет условию?"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если ВСЕ элементы удовлетворяют функции

console.log(
  [2, 2, 5].every(function(element) { return element % 2 === 0 })
)

const rndMassiveEvery = [1, 2, 3];

function every(massive, value) {
	for (let i = 0; i < massive.length; i++) {
  	if (massive[i] === value) {
      return true
    }  
  }
  return false
}

console.log(every(rndMassiveEvery, 2));

// Не понял про что это
const a = [1, 2, 3];

function map(inputArray, action) {
  const result = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    const currentElement = inputArray[i];

    const newElement = action(currentElement);
    result.push(newElement);
  }

  return result;
}