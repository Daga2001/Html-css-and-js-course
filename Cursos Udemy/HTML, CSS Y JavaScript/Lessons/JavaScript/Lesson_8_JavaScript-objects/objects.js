let person = {
    name: "Obi wan",
    lastName: "Kenobi",
    language: "es",
    get lang(){
        return this.language.toUpperCase();
    },
    set lang( lang ){
        this.language = lang.toUpperCase();
    },
    get completeName(){
        return this.name + " " + this.lastName;
    }   
};

console.log( person.lang );

person.lang = "en";
console.log( person.lang );
console.log( person.language );


console.log(typeof person.completeName);
console.log(person);

let person2 = new Object();
person2.name = "Merry";
person2.lastName = "christmas";

console.log(person2)
console.log(person2["name"]);

for( x in person ){
    console.log(person[x]);
}

delete person2.name;
console.log(person2);

let personArray = Object.values( person );
console.log( personArray );

for( i in personArray ){
    console.log( personArray[i] );
}

let stringPerson = JSON.stringify( person );
console.log( stringPerson );
console.log( '{"name":"Obi wan","lastName":"Kenobi"}' == stringPerson );

/**Constructors */

function Person( name, lastName, email ){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.fullName = function(){
        return this.name + " " + this.lastName;
    }
}

Person.prototype.tel = "0000";

let jedi = new Person( "Anakin", "Skylwaker", "sand@email.com" );
console.log( jedi );
console.log( jedi.tel );
console.log( jedi.fullName );

let array = new Array();
array.push("2", 2, 3, 4);
console.log( array );

let car1 = {
    name: "Audi",
    date: "1990",
    foo: "something",
    fullInfo: function( degree, number ){
        return  this.name + " " + this.date + " " + degree + " " + number;
    }
}

let car2 = {
    name: "Ferrari",
    date: "2021",
}

console.log( car1.fullInfo( 'tel', '333582411' ) );
console.log( car1.fullInfo.call( car2, 'ing', 'software' ) );
let array1 = [ 'ing', 'software' ];
console.log( car1.fullInfo.apply( car2, array1 ) );

