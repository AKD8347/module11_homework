let number = 8;
function isPrimeNumber(param) {
    let item = +param;
    if (item >= 1000 || item < 0) {
        item = 'данные неверны';
        return item;
    } else {
        let i = 2;
        if (item % i === 0) {
            item = 'Число простое';
            return item;
        } else {
            item = 'Число непростое';
            return item;
        }
    }
}
isPrimeNumber(number);
const result = isPrimeNumber(number);
console.log(result);
