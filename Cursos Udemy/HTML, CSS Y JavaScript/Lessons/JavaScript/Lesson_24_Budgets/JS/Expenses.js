import { Data } from './Data.js';

export class Expense extends Data{
    static counter = 0;

    constructor(description, value){
        super(description, value);
        this._expenseId = ++Expense.counter;
    }
    get id(){
        return this._expenseId;
    }
}

let expense = new Expense('expense1',2000);
console.log(expense.description);