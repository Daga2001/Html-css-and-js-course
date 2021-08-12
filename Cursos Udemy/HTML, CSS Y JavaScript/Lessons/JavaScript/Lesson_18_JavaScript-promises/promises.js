let promise = new Promise( ( resolved, rejected ) => {
    let expression = true;
    if( expression )
        resolved( 'correctly resolved!' );
    else
        rejected( 'An error occured!' );
} );

// promise.then(
//     value => console.log( value ),
//     error => console.log( error )
// );

// promise
// .then( value => console.log( value ) )
// .catch( error => console.log( error ) ) ;

// let promise2 = new Promise( ( resolved ) => {
//     console.log('beginning of promise');
//     setTimeout( () => resolved(`greetings with promise and timeout!`, 3000) );
//     console.log('ending of promise');
// } )

// promise2.then( value => console.log( value ) ); 


async function myPromise(){
    return `greetings with promise and async`;
}

// myPromise()
// .then( value => console.log( value ) );

async function myPromiseAndAwait(){
    let myPromise = new Promise( resolved => {
        resolved(`Promise with await`);
    } );

    console.log( await myPromise);
}

//myPromiseAndAwait();

async function myPromiseWithAwaitSetTimeout(){

    console.log(`first`);

    let promise = new Promise( resolved => {
        setTimeout( () => resolved( `Promise with await and timeout` ), 3000 );
    } );

    console.log( await promise );

    console.log('second');

}

myPromiseWithAwaitSetTimeout();