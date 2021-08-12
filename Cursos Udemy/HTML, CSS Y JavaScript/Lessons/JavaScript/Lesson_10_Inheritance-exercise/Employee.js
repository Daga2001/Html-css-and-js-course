class Employee extends Person{
    static howManyEmployees = 0;

    constructor( salary ){
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