let condition = 0;
// while(condition == 0){
//     console.log("i'm inevitable!");
// }
label:
for(let foo = 0; foo <= 10; foo++){
    if( foo % 2 !== 0 ){
        continue label;
    }
    console.log(foo);
}
