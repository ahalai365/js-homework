// map - создает новый массив, где каждый элемент соответственно преобразован функцией
// принимает массив и функцию-преобразователь; возвращает новый массив

console.log(
  [1, 2, 3].map(function(element) { return element + 2 })
);

function map2 (massive, change) {
  let newMassive = [];
  for (let i = 0; i < massive.length; i++) {
    newMassive.push(change(massive[i])) 
	}
  return newMassive
}

console.log(map2 ([1, 2, 3], function(element) { return element + 2 }));

// forEach - просто проходит по массиву и передает каждый элемент в функцию
// принимает массив и функцию преобразователь; не возвращает ничего

[1, 2, 3].forEach(function(element) {
  console.log(element);
})

function forEach2 (massive, looker) {
	for (let i = 0; i < massive.length; i++) {
  	looker(massive[i]);
  }
}

forEach2 ([1, 2, 3], function(element) { console.log(element) });

// find - находит первый элемент, который удовлетворяет условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает первый удачный элемент
// если элемента не нашлось - возвращает undefined

console.log(
  [1, 2, 3].find(function(element) { return element === 1 })
);

function find2 (massive, find) {
  for (let i = 0; i < massive.length; i++) {
    if (find(massive[i])) {
     return massive[i];
    }
  }
}

console.log(find2([1, 2, 3], function(element) { return element === 1 }));

// filter - создает новый массив, в который кладет только те элементы, которые удовлетворяют условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// Возвращает массив из всех элементов, которые подошли(функция сказала да)

console.log(
  [1, 2, 3, 4].filter(function(element) { return element % 2 === 0 })
)

function filter(massive, filtered) {
  let newMassive = [];
  for (let i = 0; i < massive.length; i++) {
    if (filtered(massive[i])) {
    	newMassive.push(massive[i])  
    }
	}
  return newMassive
}

console.log(filter([1, 2, 3, 4], function(element) { return element % 2 === 0 }));

// some - отвечает на вопрос "есть ли хоть один элемент, удовлетворяющий условию"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если хоть один элемент в массиве удовлетворяет функции

console.log(
  [1, 2, 3].some(function(element) { return element % 2 === 0 })
)

function some2(massive, checkElement) {
  let result = false;
  for (let i = 0; i < massive.length; i++) {
    if (checkElement(massive[i])) {
    	return result = true;
    }
	}
  return result
}

console.log(some2([1, 2, 3], function(element) { return element % 2 === 0 }));

// every - отвечает на вопрос "каждый ли элемент удовлетворяет условию?"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если ВСЕ элементы удовлетворяют функции

console.log(
  [2, 2, 5].every(function(element) { return element % 2 === 0 })
)

function every2(massive, checkElement) {
  let result = false;
  for (let i = 0; i < massive.length; i++) {
    if (checkElement(massive[i])) {
    	result = true;
    } else {
      return result = false
    }
	}
  return result
}

console.log(every2([2, 2, 5], function(element) { return element % 2 === 0 }));