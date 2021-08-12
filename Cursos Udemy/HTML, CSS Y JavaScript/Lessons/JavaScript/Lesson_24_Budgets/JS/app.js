import {Income} from './Incomes.js'
import {Expense} from './Expenses.js'

const incomes = [
    new Income('Salary', 2100.00),
    new Income('Car sale', 1500.00),
    new Income('Mansion', 10000.00)
];

const expenses = [
    new Expense('Rent apartment', 900),
    new Expense('Clothes', 400),
    new Expense('Bike', 500)
];

let loadApp = () => {
    loadHeader();
    loadIncomes();
    loadExpenses();
};

let totalIncomes = () => {
    let totalIncomes = 0;
    for(let income of incomes){
        totalIncomes += income.value;
    }
    return totalIncomes;
};

let totalExpenses = () => {
    let totalExpenses = 0;
    for(let expense of expenses){
        totalExpenses += expense.value;
    }
    return totalExpenses;
};

let loadHeader = () => {
    // console.log(`incomes size: ${incomes.length}`);
    // console.log(`expenses size: ${expenses.length}`);
    let budget = totalIncomes() - totalExpenses();
    let percentageOfExpenses = totalExpenses()/totalIncomes();
    document.getElementById('bugdet').innerHTML = moneyFormat(budget);
    document.getElementById('percentage').innerHTML = percentageFormat(percentageOfExpenses);
    document.getElementById('incomes').innerHTML = moneyFormat(totalIncomes());
    document.getElementById('expenses').innerHTML = moneyFormat(totalExpenses());
};

const moneyFormat = (value) => {
    return value.toLocaleString( 'es-US', { style:'currency', currency:'USD', minimumFractionDigits:2 } );
};

const percentageFormat = (value) => {
    return value.toLocaleString('en-US', { style:'percent', minimumFractionDigits:2 } )
};

const loadIncomes = () => {
    let HTMLIncomes = '';
    for(let income of incomes){
        HTMLIncomes += makeIncomeHTML(income);
    }
    document.getElementById('list-of-incomes').innerHTML = HTMLIncomes;
};

const makeIncomeHTML = (income) => {
    let HTMLIncome = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${income.description}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${moneyFormat(income.value)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick='eraseIncome(${income.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
    return HTMLIncome;
};

const eraseIncome = (id) => {
    let indexErased = incomes.findIndex( income => income.id === id );
    incomes.splice(indexErased, 1);
    loadHeader();
    loadIncomes();
}

const loadExpenses = () => {
    let HTMLExpenses = '';
    for(let expense of expenses){
        HTMLExpenses += makeExpenseHTML(expense);
    }
    document.getElementById('list-of-expenses').innerHTML = HTMLExpenses;
}

const makeExpenseHTML = (expense) => {
    let HTMLExpense = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${expense.description}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${moneyFormat(expense.value)}</div>
            <div class="elemento_porcentaje">${percentageFormat(expense.value/totalExpenses())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick='eraseExpense(${expense.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
    return HTMLExpense;
}

const eraseExpense = (id) => {
    let indexErased = expenses.findIndex( expenses => expenses.id === id );
    expenses.splice(indexErased, 1);
    loadHeader();
    loadExpenses();
}

const addData = () => {
    let form = document.forms['form'];
    let type = form['type'];
    let description = form['description'];
    let value = form['value'];
    if(description.value !== '' && value.value !== ''){
        if(type.value === 'income'){
            incomes.push( new Income(description.value, +value.value) );
            loadHeader();
            loadIncomes();
        }
        if(type.value === 'expense'){
            expenses.push( new Income(description.value, +value.value) );
            loadHeader();
            loadExpenses();
        }
    }
}

window.loadApp = loadApp;
window.eraseIncome = eraseIncome;
window.eraseExpense = eraseExpense;
window.addData = addData;