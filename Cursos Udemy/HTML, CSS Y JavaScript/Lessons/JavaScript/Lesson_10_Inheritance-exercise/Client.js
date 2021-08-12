class Client extends Person{

    static howManyClients = 0;

    constructor( registerDate ){
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