// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >=num3) {
        console.log(num1 + ' ' +'Самое большое число');
        return num1
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 +  ' ' + 'Самое большое число');
        return num2
    } else {
        console.log(num3 + ' ' + 'Самое большое число');
        return num3
    }
}
console.log(findLargest(1,4,75))
