/**
 * if/else sentences
 * exercise:
 * 6am-11am - good morning
 * 12pm-18pm - good afternoon
 * 19pm-24pm - good night
 * 0am-6am - sleeping
 */
function greetings(time){
    if( time >= 6 && time <= 11 ){
        return "good morning!";
    }
    if( time >= 12 && time <= 18 ){
        return "good afternoon";
    }
    if( time >= 19 && time <= 24 ){
        return "good night";
    }
    if( time >= 0 && time <= 6 ){
        return "sleeping";
    }
    else{
        return "wrong value!";
    }
}

console.log(greetings(-21));

/**
 * switch sentence.
 */
let number = 3;

let textNumber = "unknown value";

switch( number ){
    case 1:
        textNumber = "number one";
        break;
    case 2:
        textNumber = "number two";
        break;
    case 3:
        textNumber = "number three";
    case 4:
        textNumber = "number four";
        break;
    default:
        textNumber = "case not found!";
}

console.log(textNumber);