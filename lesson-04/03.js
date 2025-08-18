/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const firstArray = [1,7,70,5,9,11,6,49,52]
const secondArray = [6,5,7,88,66,41,28,67,23,11]

function findCommonElements(firstArray, secondArray) {
    const thirdArray = [];
    for(let i = 0; i < firstArray.length; i++) {
        if (includesElement(secondArray, firstArray[i])){
            thirdArray.push(firstArray[i]);
        }
    }
    return thirdArray;
}

console.log(findCommonElements(firstArray, secondArray));