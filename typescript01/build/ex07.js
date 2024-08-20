"use strict";
// let someValue: any = 1;
// let total = (<number>someValue).toFixed(2);
// console.log(total);
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength(10));
