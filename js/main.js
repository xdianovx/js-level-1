'use strict';

let a = 1, b = 1, c, d;

c = ++a;

console.log(c); // Ответ 2, так как префиксный икремент прибавляет 1 до того как значение запишется в переменную с

d = b++;
console.log(d); // Ответ 1, так как стоит посфиксный инкремент. Сначала в переменную запишется значение переменной d, а потом только прибавляется 1

c = 2 + ++a;
console.log(c); // Ответ 5. А теперь содержит 2, к которому прибавляется 1 префиксным инкрементом = 3, 2 + 3 = 5

d = 2 + b++;

console.log(d); // Ответ 4. В b лежит 2, постфиксный инкремент не добавит 1, потому 2 + 2 = 4

// a = 3 После всех предыдущих операций
// b = 3 Так же

//Задача 2

let a1 = 2;
let x = 1 + (a1 *= 2)

// Сначала выполняется выражение внутри скобках, так как скобки имеют высший приоритет, сначала значение a1 умножается на 2 и перезаписывает ее первоначальное значение на 4. Поэтому a1 = 4. Затем к a1 прибавляется 1 = 5, 5 записываем в x. x = 5
console.log(x); // 5
console.log(a1); // 4


//Задача 3

let a2 = 3;
let b2 = 5;

if (a2 > 0 && b2 > 0) {
    let sub = a2 - b2;
    console.log(sub);
} else if (a2 < 0 && b2 < 0) {
    let mul = a2 * b2;
    console.log(mul);
} else if (a2 * b2 < 0) {
    let sum = a2 + b2;
    console.log(sum);
}


// Задача 4

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

console.log(mul(5, 5));
console.log(div(4, 2));
console.log(sum(4, 3));
console.log(sub(12, 50));


// Задача 5

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case mul:
            return arg1 * arg2;
            break;

        case div:
            return arg1 / arg2;
            break;

        case sum:
            return arg1 + arg2;
            break;

        case sub:
            return arg1 - arg2;
            break;
    }
}

console.log(mathOperation(2, 3, mul));;

//Задание 6

const income = Number(prompt('Введите сумму, которую хотите вложить'));

if (income === 101) {
    alert("Ваша сумма в 101 рубль успешно зачислена");
} else if (income === 10020) {
    alert("Ваша сумма в 10020 рублей успешно зачислена.");
} else if (income === 120104) {
    alert("Ваша сумма в 120104 рубля успешно зачислена.");
}