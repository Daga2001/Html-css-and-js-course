let a, b;
a = 1, b = 2;
let z = a + b;
console.log(z);

z = a - b;
console.log(z);

z = a * b;
console.log(z);

z = a**b;
console.log(z);

z = a/b;
console.log(z);

z = a%b;
console.log(z);

z++;
console.log(z);

z--;
console.log(z);

/**
 * post-increment
 */
a
z = a++;
console.log(z);
console.log(a);
a
/**
 * pre-increment.
 */
z = ++a;
console.log(z);
console.log(b);

/**
 * ternary operator
 */
let age = "18";
let number = Number(age);
let result = ( number >= 18 ) ? "you can vote": "you cannot vote";
console.log(result);
console.log(isNaN(number))

let haha = 1, bruh =2;
console.log(haha++ + --bruh);