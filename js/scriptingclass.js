//THIS IS ABOUT INHERITANCE  /  EXTENDING
//this code doesn't actuall work :)
/*

var Vehicle = function(make,model) {
	this.make = make;
	this.model = model;
	this.miles = 0;
}

var Car = function(doors) {
	this.doors = doors;
}

Car.prototype = new Vehicle();

Vehicle.prototype.drive = function(miles) {
	this.miles += miles;
	console.log('You just drove your ' + this.make + ' ' + this.model + ' ' + this.doors + ' for ' + this.miles + ' miles.');
}


var car1 = new Vehicle('Chevy','Camaro',4);
car.drive(480);
*/

//CASCADING METHODS

//2 classes, vehicle and car. vehicle is the base class that all will have
//car is a vehicle but it has unique properties that not all vehicles share
//added new instance of vehicle class to prototype of car = creates inheritance

//created public methods for checkOil and drive. drive adds miles to initialized miles
//called drive and oil change to get whether or not you need an oil change
/*
var Vehicle = function(make, model) {
	this.make = make;
	this.model = model;
	this.miles = 0;//initializes miles variable
}

Vehicle.prototype.drive = function(miles) {
	this.miles += miles;
	return this;
}

Vehicle.prototype.checkOil = function() {
	if (this.miles >= 15000) {
			return 'You need an oil change!';
	} else {
			return 'You don\'t need an oil change at this time';
	}
}

var Car = function(doors) {
	this.doors = doors;
}

Car.prototype = new Vehicle();

var myCar = new Car('Nissan', 'Armada', 4);

console.log(myCar.drive(13000).checkOil());
*/
/*
var Vehicle = function(make,model,miles) {
	this.make = make;
	this.model = model;
	this.miles = miles;
	this.startCar = function() {
		alert('The car has started!');
	}
}

var myCar = new Vehicle('Nissan','Armada',500);
for (var property in myCar) {
	console.log(property);
}
*/
//another way to create an object literal
/*
var car = new Object();
car.make = 'Nissan';
car.model = 'Armada';
car.drive = function() {
	console.log('The ' + car.make + ' ' + car.model + ' is driving');
}
car.drive();
*/

//modifying object literal
//car.make = 'Ford';
//this will override the existing object


//create method
/*
var Vehicle = {
	type: '4 door'
};
var Car = Object.create(Vehicle);
console.log(Car.type);
console.log(Car.hasOwnProperty('type')); //false because type is from vehicle not car
*/