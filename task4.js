//функция принимающую в качестве аргументов начальное и конечное число
function lineNumbers(start, finish) {
    //в переменную передаем начальное число
    let number = start;
    //функция, которая выводит в консоль значение переменной number
    let run = function () {

        console.log(number);
        //выводим числа до последнего заданого числа
        if (number == finish) {
            clearInterval(timer);
        }
        number++;
    }

    //вызываем функцию и убираем задержку в отображении первого числа
    run();

    //создаем интервал отображения значения number размереом в 1с
    let timer = setInterval(run, 1000);
}
//задаем диапазон чисел
lineNumbers(5, 15);
