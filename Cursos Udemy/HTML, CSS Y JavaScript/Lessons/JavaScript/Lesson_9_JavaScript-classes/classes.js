class Person{

    static howMuchPeople = 0; //It's associated with class "Person".
    email = "value by default" // this attribute associates with objects.
    
    static get MAX_OBJ(){
        return 5;
    }

    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        if( Person.howMuchPeople < Person.MAX_OBJ ){
            this._idPerson = ++Person.howMuchPeople;
        }
        else{  
            console.log("Maximum quantity of population reached!");
        }
    }
    get idUser(){
        return this._idPerson;
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
    fullName(){
        return this.name + " " + this.lastName;
    }
}

class Employee extends Person{

    constructor( name, lastName, department ){
        super( name, lastName );//Here we're calling the super constructor.
        this._department = department;
    }
    get department(){
        return this._department;
    }
    set department( newDepartment ){
        this._department = newDepartment;
    }
    fullName(){
        return super.fullName() + " " + this._department;
    }
    //Overwriting a method which belongs to Object class (we need to define it in each class);
    toString(){
        //Aplying polymorphism.
        return this.fullName();
    }
    static greetings(){
        console.log("greetings from static");
    }
    static greetings2( person ){
        console.log( person._name + " " + person._lastName );
    }
}
//This is another way for avoiding to define the method in each class.
Object.prototype.toString = function(){ return this.fullName() };

let employee1 = new Employee( "Master","Chief","Engineering" );
// console.log( employee1 );
// console.log( employee1.fullName() );

let person1 = new Person("David","Beckham");
// person1.name = "Louis";
// console.log( person1 );

// console.log( person1.toString() );
// console.log( employee1.toString() );
Employee.greetings();
Employee.greetings2( person1 );

console.log( Employee.howMuchPeople );

let person3 = new Person("xd","xD");
let person4 = new Person("xd","xD");
let person5 = new Person("xd","xD");
let person6 = new Person("xd","xD");

console.log( person5.idUser );
console.log( person6.idUser );