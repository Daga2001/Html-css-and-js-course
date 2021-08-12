// data type = string
let name = "Hi!";
console.log(typeof name);
// data type = numeric
let number = 100;
console.log(typeof number == "number")
// data type = object
let object = 
{
    well: "xd",
    xd: "bruh"
}
console.log(typeof object);
// data type = boolean;
let boolean = true;
console.log(typeof boolean)
// data type = function;
function sith(goalkeeper){
    return goalkeeper;
}
console.log(typeof sith);
// data type = symbol;
let symbol = Symbol();
console.log(typeof symbol);
// class type = foo, is a function too;
class foo{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}
let person1 = new foo("David","godFather");
console.log(typeof foo);
// data type = undefined.
let x;
console.log(typeof x);
// null is an object
let d = null;
console.log(typeof d);
// arrays are objects too.
let car = ["kkk","aaa","fafa","goalKeeper"];
console.log(typeof car);
// empty strings are strings
let empty = "";
console.log(typeof empty);
/**
 * Here i'm gonna concat strings
 */

let string1 = "hello";
let string2 = "there";
let string3 = "i'm kenobi!";

let concat = string1 + " " + string2 + " " + string3;
concat += ", the number " + (2 + 3)
console.log(concat);

let another = "this is the number " + 2 + 4;
console.log(another);

let well = 2 + 4 + " is a number";
console.log(well);
/**
 * cons, let and var.
 */

const variable = "hello";
var variable2 = "there";
var variable2 ="xd"

/**
 * good practices 
 */

let je, suis;
je = 2; suis = 3;
let halo =  je + suis;
console.log(halo);
let halo = halo;
console.log(halo);