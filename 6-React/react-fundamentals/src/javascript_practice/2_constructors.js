
//We name the class
class User {
    //We call the constructor function and create parameters.
    //These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {

        //On the right side of these expressions, the word 'first', 'last', and 'e' below, 
                //we have the value that is getting passed into the parens when the object is created.
                // vvv
        this.f = first;
        this.l = last;
        this.email = e;
            //^^^^^^^^ 
        //On the right side we have the actual properties of the object. 
        //The left side stores the incoming value from the right side as 
        //the property for 'this' specific object being created.  
    }
}

var userOne = new User("Paul", "O'Conner", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);


class Player {

    constructor(name, number, points) {

        this.name = name;
        this.number = number;
        this.points = points;
    }
}

var playerOne = new Player ( "Steve McShane", "23", "40ppg");

console.log(playerOne)
console.log(playerOne.name, playerOne.number, playerOne.points)

class Car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

var myNewCar = new Car ( "Honda", "Accord", "2019");

console.log(myNewCar)
console.log(myNewCar.make, myNewCar.model, myNewCar.year)