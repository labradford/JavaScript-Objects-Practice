//ASSIGNMENT 4 PRACTICE WITH JAVASCRIPT OOP CONCEPTS 

//notes
/*syntax for creating a new object
var variableName = new ObjectType(arguments);
new object using generic Object type
var car = new Object();

*/



// STEP 1
/*
var ANIMAL = ANIMAL || {};
var cat = new ANIMAL();
var dog = new ANIMAL();
//create 2 subclasses; cat and dog
*/

//STEP 2
/*
//create cat(literal notation) and dog(constructor notation)
var cat = {};
function Dog() {};
var dog = new Dog();

*/


// STEP 3
/*

*/

// STEP 4
/*

*/

// STEP 5
/*


*/

// STEP 6
/*
var Animal = function(type,breed,color,height,length){
this.type = ;
this.breed = ;
this.color = ;
this.height = ;
this.length = ;
}
var myAnimal = new Animal
for (var property in myAnimal) {
	console.log(property);
}
*/

// STEP 7
/*

*/

// STEP 8
/*

*/

// STEP 9
/*


*/

// STEP 10 	
/*


*/

// THE RECIPE CARD	

//Create recipe object
var recipe = {
	'title' : 'Salsa',
	'servings' : 5,
	'ingredients' : ['tomatoes', 'onion', 'cilantro', 'serrano peppers'],
	'printMe' : function() {return this.title + ":\nServings: " + this.servings + '\n' this.ingredients;}
};	
	
console.log(recipe.printMe());




// THE READING LIST
/*
//array of objects:
var books = [
	book1 = {
		'title': 'The Hunger Games',
		'author': 'Suzanne Collins',
		'read': true
	},
	book2 = {
		'title': 'Life After Life',
		'author': 'Kate Atkinson',
		'read': true
	},
	book3 = {
		'title': 'Your Voice in my Head',
		'author': 'Emma Forest',
		'read': true
	},
	book4 = {
		'title': 'The Girl on the Train',
		'author': 'Paula Hawkins',
		'read': false
	},
	book5 = {
		'title': 'Gone Girl',
		'author': 'Gillian Flynn',
		'read': false
	}
];
function readBooks() {
	var result = '';
	
	for (var i = 0; i < books.length; i++ ) {
		if (books[i].read === true) {
			return  'You already read ' + books[i].title + ' by ' + books[i].author + '.';
		} else {
			return  'You still need to read ' + books[i].title + ' by ' + books[i].author + '.';
		}
	
	}
}
console.log(readBooks());


*/