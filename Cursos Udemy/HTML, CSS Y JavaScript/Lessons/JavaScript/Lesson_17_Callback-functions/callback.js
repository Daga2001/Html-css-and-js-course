let print = function(message){
    console.log(message);
}

function sum( num1, num2, callback ){
    let subs = num1 - num2;
    callback( `Result: ${subs}` );
}

// sum( 3, 2, print );

//asynchronous calls with setTimeout.
function myCallBack(){
    console.log(`i greets you with an asynchronous call after 3 sec`);
}

// setTimeout( myCallBack, 3000 ); //after 3 seconds = 3000 miliseconds
// setTimeout( function(){ console.log( `after 6 seconds` ) }, 6000 );
// setTimeout( () => console.log( `after 1 sec` ), 1000 );

let clock = () => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval( clock, 1000 );