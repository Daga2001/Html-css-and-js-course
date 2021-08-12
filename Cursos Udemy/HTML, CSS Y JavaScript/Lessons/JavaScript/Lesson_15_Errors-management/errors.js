'use strict'
// try{
//     x = 10;
//     console.log( x );
// }
// catch(error){
//     console.log( error );
// }
// finally{
//     console.log( `Here ends the analysis of errors` );
// }

let result = '0';

try{
    z = 0;
    if( isNaN( result ) ) throw `The argument isn't a number`;
}
catch( error ){
    console.log( error );
    console.log( error.name );
    console.log( error.message );
}
console.log( `let's continue...` );
