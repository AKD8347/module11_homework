//числа, которые суммируем
let first = 2;
let second = 80;
//функция, которую будем передавать, как аргумент, в функцию sum
function firstNumber(el) {
    let item = el;
    return item;
};
//функция sum
function sum(second) {
    //вызываем функцию
    return function () {
        //вызываем функцию firstNumber
        firstNumber(first);
        //передаем в переменную el значение функции firstNumber
        let el = firstNumber(first);
        //складываем значение firstNumber и аргумент, переданный в sum
        let sum = el + second;
        //возвращаем занчение
        return sum;
    }
}

//вызов функции sum, в которую в качестве аргумента передаем значение переменной second
sum(second);

const result = sum(second);

// вызываем функцию result
result();
console.log(result());
