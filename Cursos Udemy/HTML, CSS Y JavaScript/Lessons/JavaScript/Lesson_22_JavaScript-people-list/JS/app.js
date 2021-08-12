import { Person } from './Person.js';

const people = [
    new Person('Juan', 'Perez'),
    new Person('Karla', 'Lara')
];

function showPeople(){
    console.log('ShowPeople is executing!');
    let text = '';
    for( let person of people ){
        console.log(person);
        text += `<li>${person.name} ${person.lastName}</li>`
    }
    let ul = document.getElementById('people');
    ul.innerHTML = text;
};

function addPerson(){
    const form = document.forms['form'];
    const name = form['name'];
    const lastName = form['lastName'];
    people.push(new Person(name.value, lastName.value));
    console.log(people);
    if(name.value != '' && lastName != ''){
        let ul = document.getElementById('people');
        ul.innerHTML += `<li>${name.value} ${lastName.value}</li>` 
    }
    else{
        alert(`There's no info to add`);
    }
}

window.addPerson = addPerson;
window.showPeople = showPeople;
