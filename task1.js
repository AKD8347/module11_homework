let arr = [1, 2, 2, 88, null, 5, '4', 5, null, '6', ':', 1, 7, 1, 4, 9, 10, 3];
// console.log(arr);
let even = 0;
let odd = 0;
let nullEl = 0;
function elToNum() {
    let number = [];
    arr.forEach( function (item, index, array) {
        item = +item;
        number.push(item);
    });
    arr = number;
}
elToNum();
function whatIsEl() {
    arr.forEach(function (item, index, array) {
        if(item == 0) {
            nullEl++;
        } else {
            if(item % 2 == 0) {
                even++;
            } else if (item % 1 == 0) {
                odd++;
            }
        }
    });
}
whatIsEl();
console.log(`even elements: ${even}, odd elements: ${odd}, null elements: ${nullEl}`);
