// let array = new array('xd','22',22,222); this is an deprecated way to declare an array.
const cars = ["BMW", "Mercedes Benz", "Volvo"];

console.log(cars[0]);
console.log(cars[1]);

for(let number = 0; number < cars.length; number++){
    console.log(cars[number]);
}

cars[0] = "Audi";
console.log(cars[0]);

//pushes at the end of an array an element.
cars.push("Ford");
console.log(cars);

cars[5] = "Ferrari";
console.log(cars);

console.log( Array.isArray(cars) );