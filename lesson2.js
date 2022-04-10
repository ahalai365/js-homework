// map - создает новый массив, где каждый элемент соответственно преобразован функцией
// принимает массив и функцию-преобразователь; возвращает новый массив

console.log(
  [1, 2, 3].map(function(element) { return element + 2 })
);

function map2 (massive, change) {
  let newMassive = [];
  for (let i = 0; i < massive.length; i++) {
  	newMassive.push(massive[i]);
    newMassive[i] = newMassive[i] + change;
}
  return newMassive
};

console.log(map2 ([1, 2, 3], 2)); // Для остальных знаков тоже самое только нужно поменять знак

// Должно быть так?
function map(inputArray, action) {
  const result = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    const currentElement = inputArray[i];
    const newElement = change(currentElement, action);
    
    result.push(newElement);
  }

  return result;
}

function change(currentElement, action) {
  const newElement = currentElement + action;
  
  return newElement
}

console.log(map([1, 2, 3], 3));

// forEach - просто проходит по массиву и передает каждый элемент в функцию
// принимает массив и функцию преобразователь; не возвращает ничего

[1, 2, 3].forEach(function(element) {
  console.log(element);
})

function forEach2 (massive) {
	for (let i = 0; i < massive.length; i++) {
  	let result = massive[i]
    console.log(result);
  }
}
forEach2 ([1, 2, 3]); // то что надо, но не понимаю как вевести по очереди каждое значение

// find - находит первый элемент, который удовлетворяет условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает первый удачный элемент
// если элемента не нашлось - возвращает undefined

console.log(
  [1, 2, 3].find(function(element) { return element === 1 })
);

function find2 (massive, find) {
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] === find) {
      return massive[i];
    }
  }
};

console.log(find2([1, 2, 3], 2));

// filter - создает новый массив, в который кладет только те элементы, которые удовлетворяют условию
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// Возвращает массив из всех элементов, которые подошли(функция сказала да)

console.log(
  [1, 2, 3, 4].filter(function(element) { return element % 2 === 0 })
)

function filter(massive) {
  let filtered = []
  for (let i = 0; i < massive.length; i++) {
  	if (massive[i] % 2 === 0) {
    	filtered.push(massive[i])  
    }  
  }
  return filtered
}

console.log(filter([1, 2, 3, 4])); //не получалось передать выражение в аргумент, можно ли так?

// some - отвечает на вопрос "есть ли хоть один элемент, удовлетворяющий условию"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если хоть один элемент в массиве удовлетворяет функции

console.log(
  [1, 2, 3].some(function(element) { return element % 2 === 0 })
)

function some2(massive) {
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

console.log(some2([1, 2, 3]));

// every - отвечает на вопрос "каждый ли элемент удовлетворяет условию?"
// принимает массив и функцию. Функция принимает элемент и отвечает boolean - подходит или нет.
// возвращает true, если ВСЕ элементы удовлетворяют функции

console.log(
  [2, 2, 5].every(function(element) { return element % 2 === 0 })
)

function every2(massive, value) {
  let result
  for (let i = 0; i < massive.length; i++) {
    
  	if (massive[i] === value) {
      result = true
    } else {
      return result = false
   }  
    
  }
  return result
}

function someDo (value)

console.log(every2([2, 2, 5], 2));