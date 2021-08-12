import { Data } from './Data.js';

export class Income extends Data{
    static counter = 0;

    constructor(description,value){
        super(description, value);
        this._incomesID = ++Income.counter;
    }
    get id(){
        return this._incomesID;
    }
}

let income = new Income('welldone', 123);

console.log(income.description);