// 6. Необходимо создать переменную типа Number,
// присвоить ей какое то значение. Затем поочередно преобразовать ее
// в String, Boolean и опять в Number.
// Обратите внимание что необходимо не переназначить,
// а именно преобразовать переменную в другой тип.
var number = 10;
number = String(number);
console.log(number);
console.log(typeof number);
number = Boolean(number);
console.log(number);
console.log(typeof number);
number = Number(number);
console.log(number);
console.log(typeof number);
