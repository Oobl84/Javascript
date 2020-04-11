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
/*
//Ternary operator
var firstName = 'John';
var age = 24;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
/*
if (age >=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

/*
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
*/

/***************
 * Truthy and Falsy values and equality operators
*/

// falsy values : undefined, null, 0 , '', NaN
/*
var height = 23;

if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators

if (height === '23') {
    console.log('The == operator does type coercion.');
}*/

/***********************
 * CODING CHALLENGE 2 
*/
/*
var John1, John2, John3, Mike1, Mike2, Mike3;

John1 = 89;
John2 = 128;
John3 = 183;
Mike1 = 116;
Mike2 = 104;
Mike3 = 123;

avJohn = (John1 + John2 + John3) / 3;
console.log('John\'s team average score: ' + avJohn);

avMike = (Mike1 + Mike2 + Mike3) / 3;
console.log('Mike\'s team average score: ' + avMike);


if (avJohn > avMike){
    console.log('John\'s team wins on average!');
} else if (avJohn === avMike){
    console.log('The teams draw on average');
} else {
    console.log('Mike\'s team wins on average');
}


var Mary1 = 97, Mary2 = 144, Mary3 = 165;

avMary = (Mary1 + Mary2 + Mary3) / 3;

console.log('Mary\'s team average score : ' + avMary);

if (avJohn > avMike && avJohn > avMary) {
    console.log('John\'s team wins on average.');
} else if (avMike > avJohn && avMike > avMary){
    console.log('Mike\'s team wins on average.');
} else if (avMary > avJohn && avMary > avMike) {
    console.log('Mary\'s team wins on average.');
} else if (avJohn < avMike && avMike === avMary) {
    console.log('Mike and Mary\'s teams draw');
} else if (avMike < avJohn && avJohn === avMary){
    console.log('John\'s and Mary\'s teams draw');
} else if ( avMary < avMike && avMike === avJohn){
    console.log('John\'s and Mike\'s team draw.');
} else if ( avJohn === avMike && avJohn === avMary){
    console.log('They all draw.');
}

*/
/*******************
 * Functions 
*/
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

ageMe = calculateAge(1984);
console.log(ageMe);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0 ) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1984, 'Ruban');
yearsUntilRetirement(1982, 'Emma');
yearsUntilRetirement(1951, 'Amma');
*/

/****************
 * Function statements and expressions
*/
/*
// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives people around.';
        case 'designer':
            return firstName + ' makes beautiful websites.';
        default:
            return firstName + ' does something else';
    }   
}

console.log(whatDoYouDo('teacher', 'Egg'));
*/

/*********************
 * Arrays 
*/

// Collections of variables that can have different data types
/*
var names = ['Josh', 'Jane', 'Mark'];
var years = new Array(1998, 1969, 1948);

console.log(names[0]);
names[5] = 'Mary';
console.log(names);
console.log(names.length);

names[names.length] = 'Emma';
console.log(names);
*/
/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'designer'];

john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);

var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/***************************
 * CODING CHALLENGE 3: Tip calculator

var bills = [124, 48, 268]

function tipCalculator(bill) {
    if (bill < 50) {
        tip = bill * 0.2;
    } else if (bill >= 50 && bill <= 200){
        tip = bill * 0.15;
    } else {
        tip = bill * 0.1;
    }
    return tip
}

var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[1] + tips[1],];

console.log(tips, finalValues);

*/
/**************************
 * Objects and properties


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family : ['Jane', 'Mark', 'Bob', 'Emma'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.family[3]);
console.log(john['family'][2]);

*/

/***************************
 * Objects and Methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1984,
    family : ['Jane', 'Mark', 'Bob', 'Emma'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2020 - this.birthYear;
    }
};

console.log(john.calcAge());

*/
/********************8
 * CODING CHALLENGE 4
*/

/*
var ruban = {
    fullName: 'Ruban Rajendran',
    mass: 73.9,
    height: 1.75,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var emma = {
    fullName: 'Emma Rajendran',
    mass: 50,
    height: 1.62,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


if (ruban.calcBmi() > emma.calcBmi()) {
    console.log(ruban.fullName + ' has a higher BMI than ' + emma.fullName + '.');
} else if (ruban.bmi === emma.bmi) {
    console.log(ruban.fullName + ' and ' + emma.fullName + ' have the same BMI.');
} else {
    console.log(emma.fullName + ' has a higher BMI than ' + ruban.fullName + '.');
};
*/
/************************
 * Loops and Iteration
*/
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var john = ['John', 'Smith',1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

i = 0;
while ( i < john.length) {
    console.log(john[i]);
    i++;
}
*/
// continue and break statements
/*
var john = ['John', 'Smith',1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/****************************
 * Coding Challenge 5
*/
john = {
    bills : [124, 48, 268, 180, 42],
    tipCalc : function () {
        this.tips = [];
        this.finalBills = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15 ;
            } else {
                percentage = 0.1;
            }
            
            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + bill * percentage;
        }
    }
};

john.tipCalc();

console.log(john.tips, john.finalBills);

mark = {
    bills : [77, 375, 110, 45],
    tipCalc : function () {
        this.tips = [];
        this.finalBills = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1 ;
            } else {
                percentage = 0.25;
            }
            
            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + bill * percentage;
        }
    }
};

mark.tipCalc();

console.log(mark.tips, mark.finalBills);

avTip = function (array) {
    total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};

avJohn = avTip(john.tips);
avMark = avTip(mark.tips);

console.log(avJohn, avMark);

avJohn > avMark ? console.log('John\'s family tip more on average') :
    console.log('Mark\'s family tip more on average')



