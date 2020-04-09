/*********************
 * Variables and data types
*/

/*
var firstName = 'Ruban';
console.log(firstName);

var secondName = 'Rajendran';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/***********************
 * Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;


console.log(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/

/*****************************
 * Basic operators
*/

/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);

*/


/***********************************
 * Operator precedence
*/
/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/ 2;
console.log(average);

//Multiple assignments

var x, y;

x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);

//More operators

x *= 2; //same as x = x * 2
console.log(x);
x++; // increment
console.log(x);
x--; //decrement.
console.log(x);
*/


/*******************
CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI,
which is calculated using the formula:
BMI = mass / height^2 (mass in kg and height in meter)

1. Store heights and masses in variables.
2. Calculate BMI
3. Create a boolean variable containing info on whether Mark
has a higher BMI than John.
4. Print the string (Is Mark's BMI higher than John's? true).

*/
/*
var heightMark, heightJohn, massMark, massJohn;

massMark = 78;
massJohn = 86;
heightMark = 1.69;
heightJohn = 1.95;

bmiMark = massMark / heightMark ** 2;

bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark);
console.log(bmiJohn);

console.log('Is Mark\'s bmi higher than John\'s?' + bmiMark > bmiJohn);

*/

/****************
 * If / else statements 
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}


massMark = 78;
massJohn = 86;
heightMark = 1.69;
heightJohn = 1.95;

bmiMark = massMark / heightMark ** 2;

bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}

//console.log('Is Mark\'s bmi higher than John\'s?' + bmiMark > bmiJohn);

*/

/*****************
 * Boolean logic
*/
/*
var firstName = 'John';
var age = 16;

if (age <13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 19) { //Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if ( age >=20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/******
 * Ternary Operator and Switch Statements 
*/

//Ternary operator
var firstName = 'John';
var age = 24;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher' :
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');   
}

switch(true) {
    case age < 13 :
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}