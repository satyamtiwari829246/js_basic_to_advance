let no = 123;
console.log(no.toString());
console.log(typeof no.toString());

let no1=32.33999;
console.log(no1.toFixed(2));
console.log(no1.toFixed(3));

let no4 = 123.456;

console.log(no4.toPrecision(4));
console.log(no4.toPrecision(6));

let no3 = new Number(100);

console.log(no3.valueOf());

console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity)); 

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));

console.log(Number.parseInt("123"));
console.log(Number.parseInt("123.45"));


console.log(Number.parseFloat("123.45"));