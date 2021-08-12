class InputDevice{
    
    constructor( inputType, brand ){
        this._inputType = inputType;
        this._brand = brand;
    }

    get inputType(){
        return this._inputType;
    }

    set inputType( newType ){
        this._inputType = newType;
    }

    get brand(){
        return this._brand;
    }

    set brand( newBrand ){
        this._brand = newBrand;
    }

}

class Keyboard extends InputDevice{
    static howManyKeyboards = 0;

    constructor( inputType, brand ){
        super( inputType, brand );
        this._keyboardId = ++Keyboard.howManyKeyboards;
    }

    toString(){
        return `[ keyboard Id: ${this._keyboardId} ]`;
    }

}

class Mouse extends InputDevice{
    static howManyMouses = 0;

    constructor( inputType, brand ){
        super( inputType, brand );
        this._mouseId = ++Mouse.howManyMouses;
    }

    toString(){
        return `[ mouse id: ${this._mouseId} ]`;
    }

}

class Monitor{
    static howManyMonitors = 0;

    constructor( size, brand ){
        this._monitorId = ++Monitor.howManyMonitors;
        this._size = size;
        this._brand = brand;
    }

    get monitorId(){
        return this._monitorId;
    }

    set monitorId( newId ){
        this._monitorId = newId;
    }

    get size(){
        return this._size;
    }

    set size( newSize ){
        this._size = newSize;
    }

    get brand(){
        return this._brand;
    }

    set brand ( newBrand ){
        this._brand = newBrand;
    }

    toString(){
        return `[ monitor Id: ${this.monitorId}, monitor size: ${this._size}, monitor brand: ${this._brand} ]`;
    }

}

class Computer{
    static howManyComputers = 0;

    constructor( name, monitor, keyboard, mouse ){
        this._computerId = ++Computer.howManyComputers;
        this._name = name;
        this._monitor = monitor;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }

    get name(){
        return this._name;
    }

    set name( newName ){
        this._name = newName;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor( newMonitor ){
        this._monitor = newMonitor;
    } 

    get keyboard(){
        return this._keyboard;
    }

    set keyboard( newKeyboard ){
        this._keyboard = newKeyboard;
    }

    get mouse(){
        return this._mouse;
    }

    set mouse( newMouse ){
        this._mouse = newMouse;
    }

    get computerId(){
        return this._computerId;
    }

    set computerId( newId ){
        this._computerId = newId;
    }

    toString(){
        return `computer name: ${this._name}, computer id: ${this._computerId}: \n monitor: ${this._monitor.toString()} \n keyboard: ${this._keyboard.toString()} \n mouse: ${this._mouse.toString()}`;
    }

} 

class Order{
    static howManyOrders = 0;

    constructor(){
        this._orderId = ++Order.howManyOrders;
        this._computers = [];
    }

    addComputer( computer ){
        this._computers.push( computer );
    }

    showOrder(){
        let computersInOrder = '';
        for(let computer of this._computers ){
            computersInOrder += computer.toString() + '\n';
        }
        console.log(`order Id: ${this._orderId}, computers in order: \n${computersInOrder}`);
    }

}

let mouse1 = new Mouse( 'USB', 'HP' );
let mouse2 = new Mouse( 'Bluetooth', 'Dell' );
let keyboard1 = new Keyboard( 'Bluetooth', 'MSI' );
let keyboard2 = new Keyboard( 'USB', 'Acer' );
let monitor1 = new Monitor( 15, 'HP');
let monitor2 = new Monitor( 27, 'Dell' );
let computer1 = new Computer( 'HP', monitor1, keyboard1, mouse1 );
let computer2 = new Computer( 'Armada', monitor2, keyboard2, mouse2 );
let order1 = new Order();

order1.addComputer( computer1 );
order1.addComputer( computer2 );

order1.showOrder();
