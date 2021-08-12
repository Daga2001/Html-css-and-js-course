class Person{
    constructor( name, lastName ){
        this._name = name;
        this._lastName = lastName;
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

    set lastName( newLN ){
        this._lastName = newLN;
    }
};

export { Person };