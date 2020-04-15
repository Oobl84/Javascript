//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = 
function() {
    console.log(2020 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');

john.calculateAge();
*/
/*
// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1984;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: {value: 'Jane'},
    yearofBirth: { value: 1969 },
    job: {value: 'designer'}

})
*/
/*
// Primitives vs objects

var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 27;
var obj = {
    name: 'Ruban',
    city: 'London'
};

function change(a, b) {
    a = 30;
    b.city = 'New York';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

//Passing functions as arguments

var years = [1990, 1965, 1937, 1951, 1982];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullAge(el) { 
    return el >=18;
}

function maxHeartRate(age) {
    if (age >=18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(years, isFullAge);
console.log(fullAges);

var maxRates = arrayCalc(ages, maxHeartRate);
console.log(maxRates);