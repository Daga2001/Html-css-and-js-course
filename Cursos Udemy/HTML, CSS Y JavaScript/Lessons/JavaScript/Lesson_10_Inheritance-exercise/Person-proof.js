class Person{

    static howMuchPeople = 0;

    constructor( name, lastName, age ){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._userId = ++Person.howMuchPeople;
    }

    get userId(){
        return this._userId;
    }

    set userId( newId ){
        this._userId = newId;
    }

    get name(){
        return this._name;
    }

    set name( newName ){
        this._name = newName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName( newLastName ){
        this._lastName = newLastName;
    }

    get age(){
        return this._age;
    }

    set age( newAge ){
        this._age = newAge;
    }

    toString(){
        return `${this._userId} ${this._name} ${this._lastName} ${this._age}`;
    }
    
}

class Employee extends Person{
    static howManyEmployees = 0;

    constructor( name, lastName, age, salary ){
        super( name, lastName, age );
        this._employeeId = ++Employee.howManyEmployees;
        this._salary = salary;
    }

    get employeeId(){
        return this._employeeId;
    }

    set employeeId( newId ){
        this._employeeId = newId;
    }

    get salary(){
        return this._salary;
    }

    set salary( newSalary ){
        this._salary = newSalary;
    }

    toString(){
        return super.toString() + ' ' + this._employeeId + ' ' + this._salary;
    }

}

class Client extends Person{

    static howManyClients = 0;

    constructor( name, lastName, age, registerDate ){
        super( name, lastName, age );
        this._clientId = ++Client.howManyClients;
        this._registerDate = registerDate;
    }

    get clientId(){
        return this._clientId;
    }

    set clientId( newId ){
        this._clientId = newId;
    }

    get registerDate(){
        return this._registerDate;
    }

    set registerDate ( newDate ){
        this._registerDate = newDate;
    }

    toString(){
        return `${super.toString()} 
        ${this._clientId} 
        ${this._registerDate}`;
    }

}

//proofs of Person class
let person1 = new Person('Juan','Perez', 28);
console.log( person1.toString() );

let employee1 = new Employee('Karla', 'Gomez', '25', 5000);
console.log( employee1.toString() );

let employee2 = new Employee('Laura', 'Quintero', '33', 25000);
console.log( employee2.toString() );

let client1 = new Client('Miguel', 'Cervantes', '30', new Date());
console.log( client1.toString() );