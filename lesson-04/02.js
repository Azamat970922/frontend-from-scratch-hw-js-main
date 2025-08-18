/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const numbers = [1,2,5,8,9,1,2,7,3,6,5]

function findUniqueElements(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {    
        if (includesElement(result, numbers[i]) === false) {
            result.push(numbers[i]);
        }
    }
      return result;
}

console.log(findUniqueElements(numbers));