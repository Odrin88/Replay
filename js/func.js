'use strict';
//Function Declaration
let num = 2;
function showFirstMessage(text) {
    console.log(text);
    let num = 1;
    console.log(num);
}

showFirstMessage('Hello World');
console.log(num);

function calc(a,b) {
    return ( a + b);
}

console.log(calc(4,3));
console.log(calc(45,3));
console.log(calc(7,3));

//Function Expreshion

const logger = function () {
    console.log('Hello')
};

logger();

//Arrow Function

const calcul = (a,b) => a + b;
console.log(calcul(3,5))