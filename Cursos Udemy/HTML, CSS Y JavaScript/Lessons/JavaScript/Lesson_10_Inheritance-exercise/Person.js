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
        return `${this._userId} 
        ${this._name} 
        ${this._lastName} 
        ${this._age}`;
    }
    
}