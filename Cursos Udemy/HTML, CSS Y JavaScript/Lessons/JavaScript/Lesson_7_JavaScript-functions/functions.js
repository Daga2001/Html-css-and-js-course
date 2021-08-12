/**
 * Those are functions my apprentices.
 */

/**Definition of a function */
function foo(p, p2){
    if(p == p2){
        return p;
    }
    return foo(p+1, p2);
}
function factorial(number){
    if(number == 0){
        return arguments.length;
    }
    return number * factorial(number-1);
}
/**Invocation of a function */
console.log(foo(1,20));
console.log(factorial(7));

/**Expression function type */
let foo2 = function ( a, b ){ return a + b };
console.log(foo2(1,2));

/**Anonym function */
( function ( a, b ) { console.log( a + b  + " execute order " + 6 + 6 ) } ) ( 1, 2 );

console.log(typeof foo);

/**Arrow function */
const arrow = ( a, b ) => a + b;
console.log ( arrow( 1, 2 ) );

/**Arguments and parameters */
function xD( hi = 1, hoot = 2 ){
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    return hi + hoot;
}

console.log( xD ( 2, 2, 3 ) );

function sumEverything(){
    let sum = 0;
    for( i = 0; i < arguments.length; i++ ){
        sum += arguments[i];
    }
    return sum;
}

console.log( sumEverything( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ) );