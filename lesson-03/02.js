// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number % 2 === 0 ) {
        console.log(number ,'Число четное')
        return  true
    } else {
        console.log(number ,'Нечетное число')
        return false
    }
}

console.log(isEven(8))