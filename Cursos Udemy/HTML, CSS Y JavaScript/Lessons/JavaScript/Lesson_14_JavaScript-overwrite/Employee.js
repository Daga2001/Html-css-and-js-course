class Employee{
    
    constructor( name, salary ){
        this._name = name;
        this._salary = salary;
    }

    getDetails(){
        return `Employee: [ name: ${this._name}, salary: ${this._salary} ]`; 
    }

}

class Manager extends Employee{

    constructor( name, salary, department ){
        super( name, salary );
        this._department = department;
    }

    getDetails(){
        return `Manager: [ dept: ${this._department} ] \n${super.getDetails()}`;
    }

}

function print( type ){
    console.log( type.getDetails() );
    if( type instanceof Manager ){
        console.log( `It's an instace of Manager` );
    }
    if( type instanceof Employee ){
        console.log( `It's an instace of Employee` );
    }
}

let manager1 = new Manager( 'Carlos', 5000, 'software' );
let employee1 = new Employee( 'Juan', 3000 );

print( employee1 );
print( manager1 );
