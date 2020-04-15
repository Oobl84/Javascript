///////////////////////////////////////
// Lecture: Hoisting
/*
calcAge(1990);

function calcAge(year){
    console.log(2020 - year);
}



var retirement = function(year) {
    console.log(65 - (2020 - year));
}


retirement(1990);
*/
//variables

/*
console.log(age);
var age = 23;

console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping
/*
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

third();

*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calcAge(1955);

function calcAge(year) {
    console.log(2020 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1984,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunc() {
            console.log(this);
        }
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1975
};

mike.calcAge = john.calcAge;

mike.calcAge();

