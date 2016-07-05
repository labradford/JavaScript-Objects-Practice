//ASSIGNMENT 4 PRACTICE WITH JAVASCRIPT OOP CONCEPTS 

// STEP 1
/*
var ANIMAL = ANIMAL || {};
ANIMAL.Cat = function(){}
ANIMAL.Dog = function(){}
*/

//STEP 2

/*
var cat = {};
var Dog = function() {};
window.console.log(dog);
window.console.log(cat);
*/

// STEP 3
/*
function Dog() {};
var dog = new Dog();
window.console.log(dog);
*/

// STEP 4
/*
var Animal = function() {
	return 'The Animal has been created';
}
console.log(Animal());
*/

// STEP 5
/*
var Animal = function(message) {
	return message;
}

console.log(Animal('The animal has been created.'));
*/

// STEP 6
/*
var Animal = function(type,breed,color,height,length){
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}
var dog = new Animal('dog','poodle','black','20 inches','30 inches');
console.log(dog);
*/

// STEP 7
/*
var Animal = function(type,breed,color,height,length){
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}
var dog = new Animal('dog','poodle','black','20 inches','30 inches');

for (var property in dog) {
	console.log(property);
}
*/

// STEP 8
/*
var Animal = function(type,breed,color,height,length){
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}


Animal.prototype.speak = function() {
	if (this.type === 'dog') {
		return 'The ' + this.color + ' dog is barking!';
	} else if (this.type === 'cat') {
		return 'The ' + this.color + ' cat is meowing!';
 	}
}

var dog = new Animal('dog','poodle','black','20 inches','30 inches');
window.console.log(dog.speak());
*/

// STEP 9
/*
var Animal = function(type,breed,color,height,length){
	var type = type;
	var breed = breed;
	var color = color;
	var height = height;
	var length = length;
	var checkType = function() {
		if (type === 'dog') {
			return 'dog';
		} else {
			return 'cat';
		}
	};
	this.speak = function() {
    return 'The ' + checkType() + ' has made a noise!';
    };	
}


var dog = new Animal('dog','poodle','black','20 inches','30 inches');

console.log(dog.speak());

*/
// STEP 10 	

/*
String.prototype.findWords = function() {
	var find = '';
	for (var i = this.length; i >=0 ; i--) {
		//search through the string and find all instances of "cool"
		find = this.match(/cool/gi);
	}
	return find.length;
}

var paragraph = 'This is a cool paragraph. My super duper cool function will loop search through through all of the words in this paragraph and find the word cool. That is super cool, isn\'t it?';
console.log(paragraph.findWords());
*/

// THE RECIPE CARD	
/*
var Recipe = function(title, servings,ingredients) {
	this.title = title;
	this.servings = servings;
	this.ingredients = ingredients;
	this.printRecipe = function() {
		console.log(title + '\n' + 'Servings: ' + servings + '\n' + 'Ingredients: \n');
			for (var i = 0; i < ingredients.length; i++) {
			 	console.log('- ' + ingredients[i]);
			}
		}
}

var salsa = new Recipe('Salsa', 5, ['tomatoes', 'onion', 'cilantro', 'serrano peppers']);
	
salsa.printRecipe();
*/


// THE READING LIST
/*
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
	
	for (var b in books) {
		console.log(books[b].title + ' by ' + books[b].author + ': \n')
		if (books[b]['read'] === true) {
			console.log('You already read ' + books[b].title + ' by ' + books[b].author + '.');
		} else {
			console.log('You still need to read ' + books[b].title + ' by ' + books[b].author + '.');
		}
	}
}

readBooks();

*/
